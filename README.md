# restful api

```js
//安装依赖
npm install
//开启服务
npm start

//src/index.js
import express from "express";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import api from "../routes/api";

const port = process.env.port || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/api", api);

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
```
