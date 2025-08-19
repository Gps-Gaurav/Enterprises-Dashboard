const express = require("express");
const connection = require("../connection");
const router = express.Router();

const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

require("dotenv").config();
var auth = require("../services/authentication");
var checkRole = require("../services/checkRole");


router.post("/signup", (req, res) => {
  let user = req.body;
  query = "select email, password, role, status from user where email=?";
  connection.query(query, [user.email], (err, results) => {
    if (!err) {
      if (results.length <= 0) {
        query = "insert into user(name,contactNumber,email,password,status,role) values (?,?,?,?, 'false', 'user')";
        connection.query(query,[user.name, user.contactNumber, user.email, user.password],
          (err, results) => {
            if (!err) {
              return res
                .status(200)
                .json({ message: "user created successfully" });
            } else {
              return res.status(500).json(err);
            }
          }
        );
      } else {
        return res.status(400).json({ message: "email already exists" });
      }
    } else {
      return res.status(500).json(err);
    }
  });
});


router.post("/login", (req, res) => {
  const user = req.body;
  query = "select email,password,role,status from user where email=?";
  connection.query(query, [user.email], (err, results) => {
    if (!err) {
      if (results.length <= 0 || results[0].password != user.password) {
        return res.status(401).json({ message: "incorrect username and password" });
      }
      else if (results[0].status === "false") {
        return res.status(401).json({ message: "wait for admin approval" });
      }
      else if (results[0].password == user.password) {
        const response = { email: results[0].email, role: results[0].role };
        const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, {
          expiresIn: "8h",
        });
        res.status(200).json({ token: accessToken });
      } else {
        return res
          .status(400)
          .json({ message: "something went wrong please try again later" });
      }
    } else {
      return res.status(500).json(err);
    }
  });
});


var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});


router.post("/forgotPassword", (req, res) => {
  const user = req.body;
  query = "select email from user where email=?";
  connection.query(query, [user.email], (err, results) => {
    if (err) {
      if (results.length <= 0) {
        return res
          .status(200)
          .json({ message: "password sent successfully to your email" });
      } else {
        var mailOptions = {
          from: process.env.EMAIL,
          TO: results[0].email,
          subject: "Password  by cafe management system",
          html: " <p>you loginn details for cafe management system</p> <br>'<b>email : ' +results[0].email+ '</b><br><b>password : </b><b>'+results[0].password+</b  href='http//localhost4200 '",
        };
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("email sent :" + info.response);
          }
        });

        return res
          .status(200)
          .json({ message: "password sent successfully to your email" });
      }
    } else {
      return res.status(500).json(err);
    }
  });
});


router.get("/get", auth.authenticateToken, checkRole.checkRole, (req, res) => {
  var query =
    "select id,name,email,contactNumber,status from user where role='user'";
  connection.query(query, (err, results) => {
    if (!err) {
      return res.status(200).json(results);
    } else {
      return res.status(500).json(err);
    }
  });
});


router.patch("/update", auth.authenticateToken, checkRole.checkRole, (req, res) => {
  let user = req.body;
  var query = "update user set status=?";
  connection.query(query, [user.status], (err, results) => {
    if (!err) {
      if (results.affectedRows == 0) {
        return res.status(404).json({ message: "user id not found" });
      }
      return res.status(200).json({ message: "user updated successfully" });
    } else {
      return res.status(500).json(err);
    }
  });
}
);


router.get("/checkToken", auth.authenticateToken, checkRole.checkRole, (req, res) => {
  return res.status(200).json({ message: "true" });
}
);


router.post("/changePassword", auth.authenticateToken, checkRole.checkRole,
  (req, res) => {
    const user = req.body;
    const email = res.locals.email;
    var query = "select * from user where email =? and password =?";
    connection.query(query, [email, user.oldPassword], (err, results) => {
      if (!err) {
        if (results.length <= 0) {
          return res.status(400).json({ message: "old password is incorrect" });
        } else if (results[0].password == user.oldPassword) {
          query = " update user set password=? where email=?";
          connection.query(query, [user.newPassword, email], (err, results) => {
            if (!err) {
              return res
                .status(200)
                .json({ message: "password changed successfully" });
            } else {
              return res.status(500).json(err);
            }
          });
        } else {
          return res
            .status(400)
            .json({ message: "something went wrong. Please try again later" });
        }
      } else {
        return results.status(500).json(err);
      }
    });
  }
);


module.exports = router;
