BEGIN;
DROP TABLE IF EXISTS userss , posts CASCADE;

CREATE TABLE userss (
  id SERIAL PRIMARY KEY ,
  name VARCHAR (255) NOT NULL ,
  email VARCHAR (255) NOT NULL ,
  username VARCHAR (255) NOT NULL ,
  password VARCHAR (255) NOT NULL 
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES userss(id),
    title VARCHAR(255) NOT NULL,
    imageUrl VARCHAR(2000) NOT NULL
);
INSERT INTO userss (name, email, username, password) VALUES
('Ahmed AboAbadi' , 'ahmeda00badi@gmail.com', 'asdasd01' ,'$2a$10$HYSefW7XNT1W9JAPIPZ7c.2/8.fWZ0om1lbp2E.BFrndlY.N3jRuC'),
('nizar zakout' , 'nizar@gmail.com', 'nizar01' ,'$2a$10$HYSefW7XNT1W9JAPIPZ7c.2/8.fWZ0om1lbp2E.BFrndlY.N3jRuC'),
('lina ebeid' , 'linaabadi@gmail.com', 'lina01' ,'$2a$10$HYSefW7XNT1W9JAPIPZ7c.2/8.fWZ0om1lbp2E.BFrndlY.N3jRuC');


INSERT INTO posts (user_id ,title, imageUrl) VALUES
(1 , '9 Code Review TechniquesWe all know we won’t get very far without a code review. It improves the quality of the code and makes its structure more stable. Reviews also help programmers build' ,'https://images.adsttc.com/media/images/5ca2/a438/284d/d1cb/1a00/0035/large_jpg/feature.jpg?1554162729'),
(2, '10 Code Review TechniquesWe all know we won’t get very far without a code review. It improves the quality of the code and makes its structure more stable. Reviews also help programmers build','https://www.robotbulls.com/blog/blogs/47/47.jpg' ),
(3 , '11 Code Review Techniquese all know we won’t get very far without a code review. It improves the quality of the code and makes its structure more stable. Reviews also help programmers build','https://cdn1.vectorstock.com/i/1000x1000/88/60/football-black-background-vector-22828860.jpg' );


COMMIT;