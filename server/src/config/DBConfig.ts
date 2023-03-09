export const config = {
    "host": process.env.HOST,
    "user": process.env.SQL_ID,
    "password": process.env.SQL_PW,
    "database": "wewigg",
    "checkDuplicate": false,
    "connectionLimit": 100,
    "port": 3306
}