import mysql from "mysql2/promise";


export const connect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || '3306'),
    multipleStatements: true
})

export const query = async (sql: string, values: any = "") => {
    try {
        const connection = await connect
        const [rows] = await connection.execute(sql, values)
        return rows
    } catch (e) {
        console.error(e)
        return null
    }
}