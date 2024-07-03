import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";

const noStore = () => !cookies().get("auth-token");
// 所有用户
export const fetchUsers = async (current: number, pageSize: number) => {
  if (noStore()) {
    //
  }
  const offset = (current - 1) * pageSize;
  const { rows, fields } = await sql`SELECT * FROM users;`;
  const data = {
    fields,
    rows: rows.slice(offset, offset + pageSize),
    total: rows.length,
  };
  return data;
};
// 所有房间
export const fetchRooms = async (current: number, pageSize: number) => {
  if (noStore()) {
    //
  }
  const offset = (current - 1) * pageSize;
  const { rows, fields } = await sql`SELECT * FROM rooms;`;
  const data = {
    fields,
    rows: rows.slice(offset, offset + pageSize),
    total: rows.length,
  };
  return data;
};
// 查找某房间
export const fetchRoom = async (uid: string, k: string) => {
  const data =
    await sql`SELECT * FROM rooms WHERE uid = ${uid} AND password = ${k};`;
  return data;
};
// 某个房间的所有聊天
export const fetchChats = async (uid: string) => {
  const data = await sql`SELECT * FROM chats WHERE uid = ${uid};`;
  return data;
};
// 用户信息 不填参数将查询当前用户
export const fetchUser = async (uid?: string, others?: any) => {
  const token = uid ? { value: uid } : cookies().get("auth-token");
  if (!token) {
    return null;
  }
  const { art = false, draw = true } = { ...others };
  const { rows } = await sql`SELECT * FROM users WHERE uid = ${token.value};`;
  const [data] = rows.map((it) => {
    if (!draw) {
      return {
        ...it,
        draw: null,
      };
    }
    return it;
  });
  if (art) {
    const { rows: user_arts } =
      await sql`SELECT uid,title FROM arts WHERE user_id = ${token.value};`;
    return {
      ...data,
      arts: user_arts,
    };
  }
  return data;
};
// 你画我猜 列表
export const fetchArts = async (current: number, pageSize: number) => {
  if (noStore()) {
    //
  }
  const offset = (current - 1) * pageSize;
  const { rows, fields } = await sql`SELECT uid,title FROM arts;`;
  const data = {
    fields,
    rows: rows.slice(offset, offset + pageSize),
    total: rows.length,
  };
  return data;
};
// 你画我猜 画作详情
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
// 你画我猜 竞猜详情
export const fetchGuesses = async (uid: string) => {
  const data = await sql`SELECT * FROM guess WHERE uid = ${uid};`;
  return data;
};
// 定位分布
export const fetchLocations = async () => {
  if (noStore()) {
    //
  }
  const type = "0";
  const data = await sql`SELECT * FROM tasks WHERE type = ${type};`;
  return data;
};
// 定位分布
export const fetchFoods = async () => {
  if (noStore()) {
    //
  }
  const data = await sql`SELECT * FROM food;`;
  return data;
};
