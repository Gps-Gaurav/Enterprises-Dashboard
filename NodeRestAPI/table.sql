create table user(
    id int primary key AUTO_INCREMENT,
    name varchar (250),
    contactNumber varchar(50),
    email varchar(25),
    password varchar(250),
    status varchar(20),
    role varchar(20),
    UNIQUE (email)

);

insert into user (name,contactNumber,email,password,status,role) values ('Gaurav', '8192094736', 'gaurav@gmail.com', '123456','true', 'admin');

create table category (
    id int NOT NULL AUTO_INCREMENT,
    name varchar (255) NOT NULL,
    primary key (id)
);

create table product(
    id int NOT NULL AUTO_INCREMENT,
    name varchar (255) NOT NULL,
    categoryId integer NOT NULL,
    description varchar (255),
    price integer,
    status varchar(20),
    primary key (id)
);
create table bill(
    id int NOT null AUTO_INCREMENT,
    uuid varchar(200) NOT NULL,
    name varchar(255) NOT NULL,
    email varchar (255) NOT NULL,
    contactNumber varchar(50) NOT NULL,
    paymentMethod varchar(50) NOT NULL,
    total int NOT NULL,
    productDetails JSON DEFAULT NULL,
    createdBy varchar(255) NOT NULL,
    primary key (id)
);