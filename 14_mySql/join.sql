-- Active: 1692941351466@@127.0.0.1@3306@db1

-- JOIN
SELECT * FROM cstmr;
SELECT * FROM orders;

SELECT COUNT(*) FROM cstmr,orders; -- #cstmr * #orders: CROSS JOIN
SELECT COUNT(*) FROM cstmr;
SELECT COUNT(*) FROM orders;

-- WHERE 절을 이용해 조인 조건 추가
-- 테이블 이름.속성: 어느 테이블 속성인지 가리킴 
SELECT * FROM cstmr, orders 
	WHERE cstmr.custid = orders.custid;
    
SELECT * FROM cstmr, orders 
	WHERE cstmr.custid = orders.custid
    ORDER BY cstmr.custname; 

SELECT * FROM cstmr INNER JOIN orders 
	ON cstmr.custid = orders.custid;
    
-- 고객 이름, 고객 주문 상품명, 상품 가격 조회
SELECT custname, prodname, price FROM cstmr, orders 
	WHERE cstmr.custid=orders.custid;
    
SELECT custname, prodname, price FROM cstmr INNER JOIN orders
		WHERE cstmr.custid=orders.custid;
        
-- 고객 이름별로 주문한 제품 총 구매액 고객별 정렬
SELECT custname, SUM(amount* price) AS total_price 
	FROM orders INNER JOIN cstmr 
    ON cstmr.custid=orders.custid
    GROUP BY custname
    ORDER BY total_price DESC;

SELECT custname, SUM(amount* price) AS total_price 
		FROM cstmr,orders
        WHERE cstmr.custid=orders.custid
        GROUP BY custname
        ORDER BY total_price DESC;