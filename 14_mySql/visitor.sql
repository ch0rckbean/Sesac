USE db1;
drop table visitor;
CREATE TABLE visitor (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT 
);

INSERT INTO visitor VALUES
(1, "홍길동","내가 왔다."),
(2, "이찬혁", "으라차차");

use sesac;
SELECT * FROM visitor;