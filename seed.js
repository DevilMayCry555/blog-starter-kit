const { sql } = require("@vercel/postgres");
// 已存在的表
// 用户
// CREATE TABLE users (uid VARCHAR(50) PRIMARY KEY,username VARCHAR(20),birthday VARCHAR(20),admin CHAR(1),create_time VARCHAR(20),update_time VARCHAR(20),draw VARCHAR(60000));
// 聊天
// CREATE TABLE chats (uid VARCHAR(50),user_id VARCHAR(50),user_name VARCHAR(20),content VARCHAR(20),create_time VARCHAR(20));
// 房间
// CREATE TABLE rooms (uid VARCHAR(50) PRIMARY KEY,password VARCHAR(20));
// 画板
// CREATE TABLE arts (uid VARCHAR(50) PRIMARY KEY,user_id VARCHAR(50),title VARCHAR(20),content VARCHAR(60000),answer VARCHAR(50));
// 猜测
// CREATE TABLE guess (uid VARCHAR(50),user_id VARCHAR(50),content VARCHAR(50),win CHAR(1));
// flutter 任务
// CREATE TABLE tasks (uid VARCHAR(20),user_id VARCHAR(20),title VARCHAR(20),content VARCHAR(1000),points CHAR(4),type CHAR(1),create_time VARCHAR(20),perfect_time VARCHAR(20));
const actions = async () => {
  // return sql`DROP TABLE rooms;`;
  const res = await Promise.all([
    sql`CREATE TABLE dish (uid VARCHAR(4) PRIMARY KEY,name VARCHAR(20),type CHAR(1));`,
  ]);
  return res;
};
// actions().then((res) => {
//   console.log(res);
// });
// 烹饪
// CREATE TABLE food (uid VARCHAR(4) PRIMARY KEY,name VARCHAR(20),type CHAR(1),calorie CHAR(10));
// email
// CREATE TABLE email (uid VARCHAR(50) PRIMARY KEY,url VARCHAR(50));
