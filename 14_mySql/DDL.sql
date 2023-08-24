-- DB: 데이터 집합
-- DBMS: 데이터베이스 운영/관리 프로그램(ex.mySql)
-- 테이블: 하나 이상의 열,행으로 구성된 DB 최소 단위
-- SQL: RDBMS에서 사용하는 언어(데이터 구축, 
-- 참고! SQL은 대소문자 구별 x

-- DDL: (Data Definition Language)
-- DB, 테이블 정의하는 언어 

-- [Database 관련 명령어]
-- 1. Database 생성
CREATE DATABASE db1 DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI;

-- 2. Database 목록 조회
SHOW DATABASES;

-- 3. Database 사용 선언
USE db1;

-- 4. Database 삭제
DROP DATABASE db1;

-- [Table 관련 명령어]
-- 1. Table 생성
-- 제약조건(옵션)
-- NOT NULL : NULL 허용 x
-- AUTO_INCREMENT: 자동 숫자 증가, 테이블에 데이터 추가 시마다 자동 증가
-- PRIMARY KEY: 기본키(중복값 허용X, NULL 허용X) --> 한 테이블당 한개만!
-- DEFAULT 기본값: 특정 속성 기본값 설정 
-- UNIQUE: 중복 허용 X, NULL 허용 --> 한 테이블당 여러개 가능!
CREATE TABLE bckt(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    color VARCHAR(10) NOT NULL
);

-- 2. Table 목록 확인
-- 현재 사용중인 데이터베이스의 모든 테이블 조회 
SHOW tables;

-- 3. Table 구조 확인
-- 테이블 컬럼 정보(자료형, NULL 여부, KEY, DEFAULT 등)
DESC bckt;

-- 4. Table 삭제
-- drop: 테이블 존재 자체를 없앰 
DROP TABLE bckt;
-- truncate: 테이블 구조만 남겨놓고 모든 행 삭제
truncate table bckt;

-- 5. Table 정의 수정
-- 이미 테이블 만들었고, 데이터 추가되었을 때 
-- 컬럼 정보 바뀌어야 하는 경우 사용

-- 5-1. 컬럼 추가 
ALTER TABLE bckt ADD newCol DATE;

-- 5-2. 컬럼 수정
ALTER TABLE bckt MODIFY newCol INT; 
ALTER TABLE bckt CHANGE newCol newCol2 INT;  -- 컬럼명 변경

-- 5-3. 컬럼 삭제
ALTER TABLE bckt DROP newCol2;
DESC bckt;

