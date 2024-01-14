import { createPool } from "mysql2";

const pool = createPool({
  host: "127.0.0.1",
  port: "3308",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "signknigth",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.on("error", (err) => {
  console.error("Error de conexión:", err);
});

export default pool;

