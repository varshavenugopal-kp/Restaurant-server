const express = require('express');
const cors = require('cors');
const sequelize = require('./Config/Connection.js');
// const excQuery = require("./Config/Connection.js");
const restaurantrouter = require("./routes/restaurantRouter.js");

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use("/", restaurantrouter);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

app.listen(8000, () => {
    console.log("connected");
    // excQuery(`CREATE TABLE IF NOT EXISTS restaurant (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(50) NOT NULL,image TEXT,description VARCHAR(255) NOT NULL,contact VARCHAR(15),address VARCHAR(255))`).then((res)=>{
    //     console.log(res);
    //  })
});
