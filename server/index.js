require("dotenv").config();
const express = require("express");
const cors = require("cors");



const mongoose = require("mongoose");

const router = express.Router();
const teacherRoute = require("./routes/teacher")
const studentRoute = require("./routes/student")


const app = express();
app.use(cors());

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`DB Connected`))
  .catch(() => console.log(`Some problem with mongodb connection`));

//middleware
app.use(express.json());

app.use("/api/teacher", teacherRoute);
app.use("/api/student", studentRoute);


app.listen(process.env.PORT, () => {
  console.log(`Server is litening to port : ${process.env.PORT}`);
});
