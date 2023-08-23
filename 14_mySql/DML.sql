-- 
CREATE TABLE cstmr(
	custid char(10) not null primary Key ,
    custname varchar(10) not null ,
    addr char(10) not null,
    phone char(11),
    birth date
);
show tables;
desc cstmr;

-- INSERT 추가
INSERT INTO cstmr (custid,custname,addr,phone,birth) 
	values('lucky', '강해원', '미국 뉴욕', '01022223333', '2002-03-05');

insert into cstmr (addr,phone,birth,custid,custname) 
	values('대한민국 부산', '01098765432', '2007-04-28', 'wow', '이지은');

-- 속성을 지정하지 않는다면 컬럼 정의 순서대로 입력
insert into cstmr values('happy', '최시은', '일본 오키나와', '01033331234', '1970-10-31')
-- SELECT 조회
select * from cstmr;
where