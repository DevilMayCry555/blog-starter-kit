import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";

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
  const data = await sql`SELECT * FROM chats WHERE uid = ${uid};`;
  return data;
};
export const fetchUser = async (uid?: string) => {
  const token = uid ? { value: uid } : cookies().get("auth-token");
  if (!token) {
    return null;
  }
  const { rows } = await sql`SELECT * FROM users WHERE uid = ${token.value};`;
  const [data] = rows;
  return data;
};
export const fetchArts = async (
  current: number,
  pageSize: number,
  detail = false
) => {
  const offset = (current - 1) * pageSize;
  const api = () =>
    detail ? sql`SELECT * FROM arts;` : sql`SELECT uid,title FROM arts;`;
  const { rows, fields } = await api();
  const data = {
    fields,
    rows: rows.slice(offset, offset + pageSize),
    total: rows.length,
  };
  return data;
};
