const { sql } = require("@vercel/postgres");
const { db } = require("./db");
// 已存在的表
// CREATE TABLE users (uid VARCHAR(60) PRIMARY KEY,username VARCHAR(60),likes INT,intro VARCHAR(100));
const actions = async () => {
  console.log(
    db.select("users", {
      uid: { include: ["MC4yMjkzNzcwOTMzNjUzMzA3NA=="] },
    })
  );
  return await sql`SELECT * FROM users 
  WHERE uid IN (${"MC4yMjkzNzcwOTMzNjUzMzA3NA=="})`;
};
// actions().then((res) => {
//   console.log(res);
// });
