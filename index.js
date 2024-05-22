const express = require("express");
const cors = require("cors");
const config = require("./controllers/environmentController");
var bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const autorRouter = require("./routes/autor");
const livroRouter = require("./routes/livro");
const editoraRouter = require("./routes/editora");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use("/livro", livroRouter); 
app.use("/autor",  autorRouter);
app.use("/editora", editoraRouter);

// start server
app.listen(config.PORT, function () {
  console.log(`app running on localhost:${config.PORT}`);
});


