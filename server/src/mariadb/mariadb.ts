import mariadb from "mariadb";
import { config } from "../config/DBConfig";

const pool = mariadb.createPool(config);

export default async function db() {
    let conn:any;
    try {
        console.log("DB연결");
        conn = await pool.getConnection();
        await conn.release();
    } catch(err){
        console.error('DB 연결 에러',err);
        
    } finally{
        if(conn) return conn;
    }
}
