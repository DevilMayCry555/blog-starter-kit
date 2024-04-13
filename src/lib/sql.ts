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
export const fetchArts = async (current: number, pageSize: number) => {
  const offset = (current - 1) * pageSize;
  const { rows, fields } = await sql`SELECT uid,title FROM arts;`;
  const data = {
    fields,
    rows: rows.slice(offset, offset + pageSize),
    total: rows.length,
  };
  return data;
};
export const fetchArt = async (uid: string) => {
  const {
    rows: [data],
  } = await sql`SELECT * FROM arts WHERE uid = ${uid};`;
  const token = cookies().get("auth-token");
  if (token) {
    const {
      rows: [done],
    } =
      await sql`SELECT * FROM guess WHERE uid = ${uid} AND user_id = ${token.value};`;
    return {
      ...data,
      isOwn: token.value === data?.user_id,
      isDone: !!done,
    };
  }
  return data;
};
export const fetchGuesses = async (uid: string) => {
  const data = await sql`SELECT * FROM guess WHERE uid = ${uid};`;
  return data;
};
