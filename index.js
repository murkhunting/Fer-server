express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require("cors");

const authRoute = require("./routes/auth");
const projectRoute = require("./routes/project");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection SUCCESSFULL!"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/project", projectRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
