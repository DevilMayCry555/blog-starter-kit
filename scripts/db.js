const trans_data = (value) =>
  JSON.stringify([].concat(value))
    .slice(1, -1)
    .split(",")
    .map((it) => "${" + it + "}");
/**
 * 建表
 * @param {表名} name
 * @param {字段描述 type unique empty init} params
 * @returns
 */
const create_table = (name = "table", params = { uid: { type: "string" } }) => {
  const fields = Object.entries(params).map((it) => {
    const [col, config] = it;
    const { type = "INT", unique = false } = { ...config };
    const str = [col, type];
    if (unique) {
      str.push("PRIMARY KEY");
    }
    return str.join(" ");
  });
  return `CREATE TABLE ${name} (${fields.join(",")});`;
};
/**
 * 删表
 * @param {表名} name
 * @returns
 */
const delete_table = (name = "table") => `DROP TABLE ${name};`;
/**
 * 更新
 * @param {数据} data
 * @returns
 */
const update_table = (name = "table", data = { uid: btoa(Math.random()) }) => {
  const cols = Object.keys(data).join(",");
  const vals = trans_data(Object.values(data));
  return `INSERT INTO ${name} (${cols}) VALUES (${vals})`;
};

// 查询
const select_where_item = (key, vals) => {
  const value = trans_data(vals);
  // 范围
  if (key === "range") {
    const [start, end] = value.split(",");
    return (field) => `${field} BETWEEN ${start} AND ${end}`;
  }
  // 包含，排除
  if (["exclude", "include"].includes(key)) {
    const formater = { exclude: "NOT IN", include: "IN" };
    return (field) => `${field} ${formater[key]} (${value})`;
  }
  // 空/非空
  if (key === "empty") {
    return `${field} IS ${vals ? "NULL" : "NOT NULL"}`;
  }
  return (field) => `${field} ${String(key).toLocaleUpperCase()} ${value}`;
};
/**
 * where语句生成
 * @param {所有字段的where配置} wheres
 * @param {或模式} or
 * @returns
 */
const select_where = (wheres = {}, or = false) => {
  const res = Object.entries(wheres).reduce((a, b) => {
    // 每个字段
    const [field, cons] = b;
    const transfer = Object.entries({ ...cons }).reduce((a, b) => {
      const [key, vals] = b;
      a.push(select_where_item(key, vals)(field));
      return a;
    }, []);
    a.push(transfer.join(or ? " OR " : " AND "));
    return a;
  }, []);
  return `WHERE ${res.join(or ? " OR " : " AND ")}`;
};
const select_order = (col = "uid", asc = true) =>
  `ORDER BY ${col} ${asc ? "ASC" : "DESC"}`;
const select_limit = (limit = 10, current = 1) => {
  const offset = (current - 1) * limit;
  return `LIMIT ${limit} OFFSET ${offset}`;
};
const select_table = (
  name,
  wheres,
  { or, orderby, asc, limit, current } = {}
) => {
  return `SELECT * FROM ${name} 
  ${wheres ? select_where(wheres, or) : ""} 
  ${orderby ? select_order(orderby, asc) : ""} 
  ${limit ? select_limit(limit, current) : ""}`;
};

exports.db = {
  create: create_table,
  update: update_table,
  delete: delete_table,
  select: select_table,
};
