import mysql from "mysql"

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "#MySQL1337",
  database: "swift_cartdb"
})