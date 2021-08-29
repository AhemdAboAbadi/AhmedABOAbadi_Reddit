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
    content VARCHAR(2000) NOT NULL,
    imageUrl VARCHAR(2000) NOT NULL,
);
user_id ,title ,content , imageUrl
INSERT INTO userss (name, email, username, password) VALUES
('Ahmed AboAbadi' , 'ahmedabadi@gmail.com', 'asdasd01' ,'123456789'),
('nizar zakout' , 'nizar@gmail.com', 'nizar01' ,'123456789'),
('lina ebeid' , 'ahmedabadi@gmail.com', 'lina01' ,'123456789');


COMMIT;