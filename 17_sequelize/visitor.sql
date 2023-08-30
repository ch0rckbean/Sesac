-- Active: 1692941351466@@127.0.0.1@3306@sesac
-- 인코딩 다시 정의해서 생성
SHOW DATABASES;
-- 이모지, 특수 문자 사용할 수 있는 인코딩
CREATE DATABASE sesac CHARACTER SET UTF8MB4 COLLATE UTF8MB4_UNICODE_CI;

USE sesac;
CREATE TABLE visitor (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT 
);


INSERT INTO visitor VALUES (1, "액션가면","싸우자");
INSERT INTO visitor VALUES (2, "짱구","액션가면 변신!");


SELECT * FROM visitor;

-- user라는 새로운 계정(mySQL에 접속 가능한 계정) 생성
CREATE USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
-- user 계정에 대해 모든 권한 부여(DCL 중 GRANT)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- MySQL 캐시 새로고침
flush PRIVILEGES;

SHOW DATABASES;
SELECT * FROM mysql.user;
-- 에러 처리를 위해
DROP USER 'user'@'%';
