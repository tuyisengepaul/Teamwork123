import Environment from '../config/database';

const conn = Environment.dbConnection();

const createAllCommentsTest = async () => {
  await conn.query(`INSERT INTO 
  comments(articleid,comment,createdon,flag) 
  VALUES
  (3,'I like this article','2011-09-27T18:14:54.341Z',0),
  (4,'I like this article','2012-09-27T18:14:54.341Z',0),
  (5,'I like this article','2013-09-27T18:14:54.341Z',0),
  (6,'I like this article','2014-09-27T18:14:54.341Z',0),
  (6,'I like this article','2014-09-27T18:14:54.341Z',0),
  (7,'I like this article','2015-09-27T18:14:54.341Z',1),
  (3,'I like this article','2016-09-27T18:14:54.341Z',1)`);

  await conn.end();
};

const createAllUserTest = async () => {
  await conn.query(`INSERT INTO 
  users(firstname, lastname, email, password, gender, jobrole, department,address,type) 
  VALUES
  ('Karangwa','Joel','karangwajoel@gmail.com','$2b$10$xMSpgNoUvSCe56zupmT8heG1VJJfiNdF81SK6fgAQS9lnJ/wLSAYK','Male','IT','ICT','KK 34 ave','staff'),
  ('Kaberuka','Paul','kabepaul@gmail.com','$2b$10$xMSpgNoUvSCe56zupmT8heG1VJJfiNdF81SK6fgAQS9lnJ/wLSAYK','Male','Engineer','Engineering','Kigali','staff'),
  ('Murekatete','Innocente','mtete@gmail.com','$2b$10$xMSpgNoUvSCe56zupmT8heG1VJJfiNdF81SK6fgAQS9lnJ/wLSAYK','Male','Engineer','Engineering','Kigali','staff'),
  ('Bugingo','Aime','bugingo@gmail.com','$2b$10$xMSpgNoUvSCe56zupmT8heG1VJJfiNdF81SK6fgAQS9lnJ/wLSAYK','Male','Engineer','Engineering','Kigali','staff'),
  ('Karinganire','Epa','kaiepa@gmail.com','$2b$10$xMSpgNoUvSCe56zupmT8heG1VJJfiNdF81SK6fgAQS9lnJ/wLSAYK','Male','Engineer','Engineering','Kigali','staff'),
  ('Mutesi','Yvette','myevette@gmail.com','$2b$10$xMSpgNoUvSCe56zupmT8heG1VJJfiNdF81SK6fgAQS9lnJ/wLSAYK','Male','Engineer','Engineering','Kigali','staff')`);

  await conn.end();
};

const createAllArticleTest = async () => {
  await conn.query(`INSERT INTO 
  articles(creatorid,title,article,createdOn,flag) 
  VALUES
  (1,'how can we implove ourselftest1​','how can we implove ourself​how can we implove ourself​1','2011-09-27T18:14:54.341Z',0),
  (2,'how can we implove ourself​test2','how can we implove ourself​how can we implove ourself​2','2012-09-27T18:14:54.341Z',0),
  (3,'how can we implove ourselftest3​','how can we implove ourself​how can we implove ourself​3','2013-09-27T18:14:54.341Z',0),
  (3,'how can we implove ourself​test4','how can we implove ourself​how can we implove ourself​4','2014-09-27T18:14:54.341Z',0),
  (4,'how can we implove ourself​test5','how can we implove ourself​how can we implove ourself​5','2015-09-27T18:14:54.341Z',1),
  (4,'how can we implove ourselftest6​','how can we implove ourself​how can we implove ourself​6','2016-09-27T18:14:54.341Z',1)`);

  await conn.end();
};
createAllUserTest();
createAllArticleTest();
createAllCommentsTest();
