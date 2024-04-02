const { sql } = require("@vercel/postgres");
const { db } = require("./db");
// 已存在的表
// CREATE TABLE users (uid VARCHAR(50) PRIMARY KEY,username VARCHAR(20),birthday VARCHAR(20),intro VARCHAR(20),create_time VARCHAR(20),update_time VARCHAR(20));
const actions = async () => {
  return await sql`CREATE TABLE users (uid VARCHAR(50) PRIMARY KEY,username VARCHAR(20),birthday VARCHAR(20),intro VARCHAR(20),create_time VARCHAR(20),update_time VARCHAR(20));`;
};
// actions().then((res) => {
//   console.log(res);
// });
