const { sql } = require("@vercel/postgres");
// 已存在的表
// CREATE TABLE users (uid VARCHAR(50) PRIMARY KEY,username VARCHAR(20),birthday VARCHAR(20),admin CHAR(1),create_time VARCHAR(20),update_time VARCHAR(20));
// CREATE TABLE chats (uid VARCHAR(50),user_id VARCHAR(50),user_name VARCHAR(20),content VARCHAR(20),create_time VARCHAR(20));
// CREATE TABLE rooms (uid VARCHAR(50) PRIMARY KEY,password VARCHAR(20));
const actions = async () => {
  // return sql`DROP TABLE rooms;`;
  return await sql`INSERT INTO users (uid,username,create_time,admin)
  VALUES (${btoa("JX981008TIGER")},${"admin"},${"2024-05-20 21:13:14"},1);`;
};
// actions().then((res) => {
//   console.log(res);
// });