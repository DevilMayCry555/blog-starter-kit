import { sql } from "@vercel/postgres";

export const fetchUsers = async (current: number, pageSize: number) => {
  const offset = (current - 1) * pageSize;
  const { rows, fields } = await sql`SELECT * FROM users;`;
  const data = {
    fields,
    rows: rows.slice(offset, offset + pageSize),
    total: rows.length,
  };
  return data;
};
export const fetchRooms = async (current: number, pageSize: number) => {
  const offset = (current - 1) * pageSize;
  const { rows, fields } = await sql`SELECT * FROM rooms;`;
  const data = {
    fields,
    rows: rows.slice(offset, offset + pageSize),
    total: rows.length,
  };
  return data;
};
export const fetchChats = async (uid: string) => {
  const { rows } = await sql`SELECT * FROM rooms WHERE uid = ${uid};`;
  if (!rows.length) {
    return null;
  }
  const data = await sql`SELECT * FROM chats WHERE uid = ${uid};`;
  return data;
};
export const fetchSelf = async (uid: string) => {
  const { rows } = await sql`SELECT * FROM users WHERE uid = ${uid};`;
  if (!rows.length) {
    return null;
  }
  return rows[0];
};
