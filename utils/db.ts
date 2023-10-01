import { ConnectionOptions } from "mysql2";
import mysql from 'mysql2/promise'

const access: ConnectionOptions = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
};

const connection = mysql.createConnection(access);

const getPosts = async () => {
  const [rows, fields] = await (await connection).execute('SELECT * FROM posts');
  return rows
}

export default getPosts;
