import mysql from "serverless-mysql"
const db = mysql({
  config: {
    host:'localhost',
    // host: process.env.DB_URL,
    // password: process.env.DB_PWD,
    user: "root",
    port:"3306",
    database: "bus_app3"
  }
})

export const queryDB = async (sql) => {
  try {
    let dbRes = await db.query(sql);
    await db.end();
    return dbRes;
  }
  catch (error){
    console.log(error)
    return null;
  }
}