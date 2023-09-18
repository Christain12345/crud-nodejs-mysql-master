import { createPool } from "mysql2/promise";

export const pool = createPool({
  host     : 'database-mysql2.czk8yihtw8wl.ap-southeast-2.rds.amazonaws.com',
  database : 'happy', 
  user     : 'admin',
  password : '12345678',
  port     : '3306'

});
