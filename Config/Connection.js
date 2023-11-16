// import mysql from "mysql2"
// import dotenv from "dotenv"

// dotenv.config()

// const db = mysql.createPool({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USERNAME,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DB,
//     connectionLimit: 10,
//     multipleStatements: true
// })


// const excQuery = async (query,values) => {
//     return new Promise(async (resolve, reject) => {
//         db.query(query,values,(err,res)=>{
//            if(err){
//                 reject(err)
//            }else{
//                 resolve(res)
//            }
//         })
//     })
// }


// export default excQuery

// module.exports={
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USERNAME,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DB,
//     dialect:process.env.DIALECT
// }

// Connection.js

// Connection.js

// import { Sequelize } from 'sequelize';

// const sequelize = new Sequelize({
//   dialect: process.env.DIALECT,
//   host: process.env.MYSQL_HOST,
//   username: process.env.MYSQL_USERNAME,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DB,
// });

// export default sequelize;

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('restaurants', 'root', 'VarshaKP@@2000', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
