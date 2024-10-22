-- CREATE DATABASE movies;

-- USE movies;

-- DROP DATABASE movies;

-- CREATE TABLE movie(
-- movie_id INT PRIMARY KEY AUTO_INCREMENT,
-- movie_name VARCHAR(255),
-- actore VARCHAR(100),
-- budget BIGINT,
-- gener VARCHAR(50),
-- rating FLOAT,
-- box_office_collection BIGINT,
-- director VARCHAR(100),
-- awards TEXT
-- );

-- DROP TABLE movie;

-- INSERT INTO movie (movie_name, actore, budget, gener, rating, box_office_collection, director, awards)
-- VALUES
-- 	("KGF", "Yash", 100000000, "Action", 9.8, 10000000000, "Neail", NULL ),
--     ("Devara", "Jr.NTR", 1000000, "Action", 8.8, 50000000, "Siva", NULL ),
--     ("Kobbarimatta", "Sampoo", 10000, "Action", 7.8, 20000, "Neail", NULL );
--     
-- SELECT * FROM movie;

-- SELECT movie_name FROM movie WHERE rating > 9 AND gener = "Action";

-- CREATE TABLE students (
-- studet_id INT PRIMARY KEY AUTO_INCREMENT,
-- name VARCHAR(100) NOT NULL,
-- branch VARCHAR(50) NOT NULL,
-- cgpa FLOAT NOT NULL,
-- city VARCHAR(100)
-- );

-- DROP TABLE students;
--     
-- INSERT INTO students (name, branch, cgpa, city)
-- VALUES 
-- 	("Raju","EEE",7.0, "Guntur"),
--     ("Bhargav","CSE",9.2, "Repalle"),
-- ("Karthik","EEE",8.4, "Hyderabad");

-- SELECT * FROM students WHERE city = "Guntur" AND branch = "CSE";

-- SELECT * FROM students;

-- SELECT * FROM students ORDER BY city DESC;

-- SELECT MAX(cgpa) FROM students;

-- SELECT MIN(cgpa) FROM students;

-- SELECT AVG(cgpa) FROM students;
--     
-- SELECT COUNT(name) FROM students;

--  SELECT COUNT(name), city FROM students HAVING MAX(cgpa) > 8;
--  
--  SELECT city, COUNT(name) 
--  FROM students 
--  GROUP BY city 
--  HAVING MAX(cgpa) > 8;


-- CREATE DATABASE college;
    
-- USE college;
    
-- CREATE TABLE Students (
--     roll_no INT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     marks INT,
--     city VARCHAR(100),
--     grade CHAR(2)
-- );

-- CREATE TABLE dept (
--   id INT PRIMARY KEY,
--   name VARCHAR(50)
-- );
-- DROP TABLE teacher;
-- CREATE TABLE teacher(
-- id INT PRIMARY KEY,
-- name VARCHAR(50),
-- dept_id INT,
-- FOREIGN KEY (dept_id) REFERENCES dept(id)
-- ON UPDATE CASCADE
-- ON DELETE CASCADE
-- );

-- INSERT INTO Students (roll_no, name, marks, city, grade)
-- VALUES 
-- (1, 'Alice Johnson', 85, 'New York', 'A'),
-- (2, 'Bob Smith', 78, 'Los Angeles', 'B'),
-- (3, 'Charlie Brown', 92, 'Chicago', 'A+'),
-- (4, 'David Miller', 65, 'Houston', 'C'),
-- (5, 'Emma Davis', 88, 'Phoenix', 'A');

-- SELECT * FROM Students;

-- SELECT * FROM Students WHERE marks > 80;

-- SELECT * FROM Students ORDER BY name;

-- SELECT MAX(marks) FROM Students ORDER BY city;
    
-- SELECT city
-- FROM Students
-- WHERE grade = "A"
-- GROUP BY city
-- HAVING MAX(marks) > 80
-- ORDER BY city ASC;

-- SET SQL_SAFE_UPDATES = 0;

-- UPDATE Students
-- SET grade = "O"
-- WHERE grade = "A+";
    
-- SELECT * FROM Students;

-- INSERT INTO dept
-- VALUES
-- 	(101,"EEE"),
--     (102,"IT");
    
-- SELECT * FROM dept;

-- INSERT INTO teacher
-- VALUES
-- 	(101,"Adam",101),
--     (102,"Eve",102);
    
-- SELECT * FROM teacher;

-- UPDATE dept
-- SET id = 103
-- WHERE id = 102;
    
    
    
 
    
    CREATE TABLE Student (
    studentId INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    branch VARCHAR(10),
    email VARCHAR(100) NOT NULL,
    gpa VARCHAR(10),
    marks DECIMAL(5,2),
    city VARCHAR(50)
);

DROP TABLE Student;

INSERT INTO Student (name, branch, email, gpa, marks, city) 
VALUES
    ('Alice Johnson', 'CSE', 'alice.johnson@example.com', 'A', 88.50, 'New York'),
    ('Bob Smith', 'ECE', 'bob.smith@example.com', 'B', 85.00, 'Los Angeles'),
    ('Charlie Brown', 'ME', 'charlie.brown@example.com', 'C', 80.25, 'Chicago'),
    ('Diana Prince', 'CIV', 'diana.prince@example.com', 'A', 92.75, 'Houston'),
    ('Ethan Hunt', 'CSE', 'ethan.hunt@example.com', 'B', 83.40, 'Phoenix'),
    ('Fiona Gallagher', 'EEE', 'fiona.gallagher@example.com', 'C', 78.60, 'Philadelphia'),
    ('George Martin', 'CSE', 'george.martin@example.com', 'A', 89.10, 'San Antonio'),
    ('Hannah Lee', 'BIO', 'hannah.lee@example.com', 'B', 84.95, 'San Diego'),
    ('Ian Wright', 'CHE', 'ian.wright@example.com', 'C', 81.70, 'Dallas'),
    ('Julia Roberts', 'CSE', 'julia.roberts@example.com', 'A', 90.20, 'San Jose');
    

-- SELECTING THE ALL THE STUDENT FROM THE STUDENTS TABLE 
SELECT * FROM Student;


-- SELECTING THE NAME AND BRANCH FROM THE STUDENT TABLE 
SELECT name, branch FROM Student;

-- DISTINCT  
SELECT DISTINCT branch FROM Student;

-- COUNT 
SELECT COUNT(branch) FROM Student;

-- WHERE branch = 'branch_name'
SELECT * FROM Student WHERE branch = "EEE";

-- WHERE studentID = 'student_id'
SELECT * FROM Student WHERE studentId = 3;

-- WHERE marks <, >, <=, >= marks_number 
SELECT * FROM Student WHERE marks > 90;

-- ORDER BY 
SELECT * FROM Student ORDER BY gpa;

-- ORDER BY ASC (ASSENDING ORDER )
SELECT * FROM Student ORDER BY marks ASC;

-- ORDER BY DESC (DESENDIG ORDER )
SELECT * FROM Student ORDER BY marks DESC;


-- WHERE city = 'city_nmae' OR branch = 'branch_name'
SELECT * FROM Student WHERE city = "Chicago" OR branch = "EEE";


-- WHERE city = 'city_nmae' AND branch = 'branch_name'
SELECT * FROM Student WHERE city = "Chicago" AND branch = "ME";

-- WEHERE marks  BETWEEN marks_num1 AND marks_num2
SELECT * FROM  Student WHERE marks BETWEEN 80 AND 90;

-- UPDATE 
UPDATE Student SET marks = 99, gpa = "O" WHERE studentId = 4;

-- UPDATE 
UPDATE Student SET branch = "EEE" WHERE studentId = 4;


-- DELETE 
DELETE FROM Student WHERE branch = "BIO";

-- LIMIT
SELECT *  FROM Student LIMIT 3;

-- SUM 
SELECT SUM(marks) FROM Student;

-- MAX
SELECT MAX(marks) from Student;

-- MIN
SELECT MIN(marks) from Student;

-- AVG 
SELECT AVG(marks) FROM Student;

SELECT * FROM Student WHERE city IN ("Chicago");

SELECT * FROM Student WHERE city NOT IN ("Chicago");





































    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    