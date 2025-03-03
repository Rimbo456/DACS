const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

//mongodb config
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rimbo:alo123@doancoso.tvkcj.mongodb.net/?retryWrites=true&w=majority&appName=DoAnCoSo");

//create account api
const registerRoute = require("./routes/register.route");
app.use("/api", registerRoute);

//login api
const loginRoute = require("./routes/login.route");
app.use("/api", loginRoute);

//add product
const addProductRoute = require("./routes/addproduct.route");
app.use("/api", addProductRoute);

//get product
const getProduct = require("./routes/getproduct.route");
app.use("/api", getProduct);

//get profile
const getProfile = require("./routes/getprofile.route");
app.use("/api", getProfile);

//get detail
const getDetail = require("./routes/getdetail.route");
app.use("/api", getDetail);

//add wish
const addwish = require("./routes/addwish.route");
app.use("/api", addwish);

//add wish
const removewish = require("./routes/removewish.route");
app.use("/api", removewish);

//get wish
const getWish = require("./routes/getwish.route");
app.use("/api", getWish);

//add cart
const addCart = require("./routes/addcart.route");
app.use("/api", addCart);

//get cart
const getCart = require("./routes/getcart.route");
app.use("/api", getCart);

//remove cart
const removeCart = require("./routes/removecart.route");
app.use("/api", removeCart);

//filter
const filter = require("./routes/filter.route");
app.use("/api", filter);

//create order
const createOrder = require("./routes/createorder.route");
app.use("/api", createOrder);

//edit information
const editInfor = require("./routes/editinfor.route");
app.use("/api", editInfor);

// socket
const socketHandle = require("./socket.io/socket");
socketHandle(server);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:5173", // Địa chỉ của frontend
    methods: ["GET", "POST"],
  },
});
app.set("socketio", io); // Gán `io` vào `app`

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
