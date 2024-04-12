const { sql } = require("@vercel/postgres");
// 已存在的表
// 用户
// CREATE TABLE users (uid VARCHAR(50) PRIMARY KEY,username VARCHAR(20),birthday VARCHAR(20),admin CHAR(1),create_time VARCHAR(20),update_time VARCHAR(20));
// 聊天
// CREATE TABLE chats (uid VARCHAR(50),user_id VARCHAR(50),user_name VARCHAR(20),content VARCHAR(20),create_time VARCHAR(20));
// 房间
// CREATE TABLE rooms (uid VARCHAR(50) PRIMARY KEY,password VARCHAR(20));
// 画板
// CREATE TABLE arts (uid VARCHAR(50) PRIMARY KEY,user_id VARCHAR(50),title VARCHAR(20),content VARCHAR(60000),finish CHAR(1));
// 猜测
// CREATE TABLE guess (uid VARCHAR(50),user_id VARCHAR(50),content VARCHAR(50),answer CHAR(1));
const actions = async () => {
  // return sql`DROP TABLE rooms;`;
  return await sql`ALTER TABLE guess
  ADD COLUMN answer CHAR(1);`;
};
// actions().then((res) => {
//   console.log(res);
// });
