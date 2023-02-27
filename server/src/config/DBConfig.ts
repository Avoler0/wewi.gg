import { SQL_ID, SQL_PW } from "../../dotenv";

export const config = {
    "host": process.env.HOST,
    "user": SQL_ID,
    "password": SQL_PW,
    "database": "wewigg",
    "checkDuplicate": false,
    "connectionLimit": 100,
    "port": 3306
}