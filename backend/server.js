require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();

// const socket = require("./Utils/socket");
// const User = require("./model/userModel");
const connect = require("./utils/db");
const router = require("./routes/index")

const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
);

router(app)





app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
connect();
