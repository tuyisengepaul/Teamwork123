import Environment from '../config/database';

const conn = Environment.dbConnection();

const createAllCommentsTest = async () => {
  await conn.query(`INSERT INTO 
  comments(articleid,comment,createdon,flag) 
  VALUES
  (1,'I like this article','2011-09-27T18:14:54.341Z',1),
  (1,'I like this article','2012-09-27T18:14:54.341Z',1),
  (1,'I like this article','2013-09-27T18:14:54.341Z',1),
  (3,'I like this article','2014-09-27T18:14:54.341Z',1),
  (4,'I like this article','2014-09-27T18:14:54.341Z',1),
  (5,'I like this article','2015-09-27T18:14:54.341Z',1),
  (7,'I like this article','2016-09-27T18:14:54.341Z',1),
  (1,'I like this article','2013-09-27T18:14:54.341Z',1),
  (3,'I like this article','2014-09-27T18:14:54.341Z',0),
  (9,'I like this article','2014-09-27T18:14:54.341Z',0),
  (1,'I like this article','2015-09-27T18:14:54.341Z',0),
  (2,'I like this article','2016-09-27T18:14:54.341Z',0)`);

  await conn.end();
};

const createAllUserTest = async () => {
  await conn.query(`INSERT INTO 
  users(firstname, lastname, email, password, gender, jobrole, department,address,type) 
  VALUES
  ('Karangwa','Joel','karangwajoel@gmail.com','Pwd@123.','Male','IT','ICT','KK 34 ave','staff'),
  ('Kaberuka','Paul','kabepaul@gmail.com','Pwd@123.','Male','Engineer','Engineering','Kigali','staff'),
  ('Murekatete','Innocente','mtete@gmail.com','Pwd@123.','Male','Engineer','Engineering','Kigali','staff'),
  ('Bugingo','Aime','bugingo@gmail.com','Pwd@123.','Male','Engineer','Engineering','Kigali','staff'),
  ('Karinganire','Epa','kaiepa@gmail.com','Pwd@123.','Male','Engineer','Engineering','Kigali','staff'),
  ('Mutesi','Yvette','myevette@gmail.com','Pwd@123.','Male','Engineer','Engineering','Kigali','staff')`);

  await conn.end();
};

const createAllArticleTest = async () => {
  conn.query(`INSERT INTO 
  articles(creatorid,title,article,createdOn,flag) 
  VALUES
  (1,'how can we implove ourselftest1​','how can we implove ourself​how can we implove ourself​1','2011-09-27T18:14:54.341Z',0),
  (2,'how can we implove ourself​test2','how can we implove ourself​how can we implove ourself​2','2012-09-27T18:14:54.341Z',0),
  (3,'how can we implove ourselftest3​','how can we implove ourself​how can we implove ourself​3','2013-09-27T18:14:54.341Z',1),
  (3,'how can we implove ourself​test4','how can we implove ourself​how can we implove ourself​4','2014-09-27T18:14:54.341Z',0),
  (4,'how can we implove ourself​test5','how can we implove ourself​how can we implove ourself​5','2015-09-27T18:14:54.341Z',1),
  (4,'how can we implove ourselftest6​','how can we implove ourself​how can we implove ourself​6','2016-09-27T18:14:54.341Z',1)`);

  await conn.end();
};
createAllArticleTest();
createAllCommentsTest();
createAllUserTest();
