CREATE DATABASE movies;

USE movies;

CREATE TABLE movie(
movie_id INT PRIMARY KEY AUTO_INCREMENT,
movie_name VARCHAR(255),
actore VARCHAR(100),
budget BIGINT,
gener VARCHAR(50),
rating FLOAT,
box_office_collection BIGINT,
director VARCHAR(100),
awards TEXT
);

DROP TABLE movie;

INSERT INTO movie (movie_name, actore, budget, gener, rating, box_office_collection, director, awards)
VALUES
	("KGF", "Yash", 100000000, "Action", 9.8, 10000000000, "Neail", NULL ),
    ("Devara", "Jr.NTR", 1000000, "Action", 8.8, 50000000, "Siva", NULL ),
    ("Kobbarimatta", "Sampoo", 10000, "Action", 7.8, 20000, "Neail", NULL );
    
SELECT * FROM movie;

SELECT movie_name FROM movie WHERE rating > 9 AND gener = "Action";

CREATE TABLE students (
studet_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
branch VARCHAR(50) NOT NULL,
cgpa FLOAT NOT NULL,
city VARCHAR(100)
);

DROP TABLE students;
    
INSERT INTO students (name, branch, cgpa, city)
VALUES 
	("Raju","EEE",7.0, "Guntur"),
    ("Bhargav","CSE",9.2, "Repalle"),
("Karthik","EEE",8.4, "Hyderabad");

SELECT * FROM students WHERE city = "Guntur" AND branch = "CSE";

SELECT * FROM students;

SELECT * FROM students ORDER BY city DESC;

SELECT MAX(cgpa) FROM students;

SELECT MIN(cgpa) FROM students;

SELECT AVG(cgpa) FROM students;
    
SELECT COUNT(name) FROM students;

 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    