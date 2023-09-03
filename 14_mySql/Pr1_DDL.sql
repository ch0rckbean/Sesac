CREATE DATABASE Pr1_DDL DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI;
USE pr1_DDL;

-- 1. DDL 사용한 테이블 생성 
CREATE TABLE member (
	id VARCHAR(20) PRIMARY KEY NOT NULL,
    name VARCHAR(5) NOT NULL ,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50) ,
    promotion VARCHAR(2) 
);    
-- ALTER TABLE member MODIFY promotion VARCHAR (2) DEFAULT 'X'

-- 조회
SHOW TABLES;
DESC member;

-- 2. ALTER 통한 구조 변경
ALTER TABLE member MODIFY id VARCHAR(10);
ALTER TABLE member DROP COLUMN age;
ALTER TABLE member ADD interest VARCHAR(100); 

-- 3. user 테이블 생성
CREATE TABLE user(
	id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F','M','') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

DESC user;

-- 4. INSERT 통한 데이터 추가 + SELECT 통한 조회 
INSERT INTO user VALUES
		("hong1234", "8o4bkg", "홍길동", "M", "1990-01-31", 33),
        ("sexysung", "87awjkdf", "성춘향", "F", "1992-03-31", 31),
        ("power70", "qxur8sda", "변사또", "M", "1970-05-02", 53),
        ("hanjo", "jk48fn4", "한조", "M", "1984-10-18", 39),
        ("widowmaker", "38ewifh3", "위도우", "F", "1976-06-27", 47),
        ("dvadva", "k3f3ah", "송하나", "F", "2001-06-03", 22),
        ("jungkrat", "4ifha7f", "정크랫", "M", "1999-11-11", 24);	
SELECT * FROM user;

-- 5. 조건 만족하는 SQL문 작성 
SELECT * FROM user ORDER BY birthday;
SELECT * FROM user WHERE gender='M' ORDER BY NAME DESC;
SELECT id,name FROM user WHERE birthday LIKE "199%";
SELECT * FROM user WHERE birthday LIKE "_____06%" ORDER BY birthday;
SELECT * FROM user WHERE gender="M" AND birthday LIKE "197%";
SELECT * FROM user ORDER BY age DESC LIMIT 3;
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
UPDATE user SET pw="12345678" WHERE id="hong1234";
DELETE FROM user WHERE id="jungkrat";