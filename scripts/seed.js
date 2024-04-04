const { sql } = require("@vercel/postgres");
const { db } = require("./db");
// 已存在的表
// CREATE TABLE users (uid VARCHAR(50) PRIMARY KEY,username VARCHAR(20),birthday VARCHAR(20),intro VARCHAR(20),create_time VARCHAR(20),update_time VARCHAR(20));
// CREATE TABLE chats (uid VARCHAR(50) PRIMARY KEY,user_id VARCHAR(50),user_name VARCHAR(20),content VARCHAR(20),create_time VARCHAR(20));
const actions = async () => {
  // return sql`DROP TABLE chats;`;
  return await sql`CREATE TABLE chats (uid VARCHAR(50),user_id VARCHAR(50),user_name VARCHAR(20),content VARCHAR(20),create_time VARCHAR(20));`;
};
actions().then((res) => {
  console.log(res);
});
