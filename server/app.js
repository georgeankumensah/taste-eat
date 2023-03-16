const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const dishesRouter = require("./routes/Dishes/Dishes.route");
const blogsRouter = require("./routes/Blogs/Blogs.route");
const chefsRouter = require("./routes/Chefs/Chefs.route");

const app = express();

app.use(morgan("combined"));
app.use(
	cors({
		origin: "*",
	})
);

app.use(express.json());
app.use(dishesRouter);
app.use(blogsRouter);
app.use(chefsRouter);

// For  images

app.use("/photos", express.static("uploads"));

module.exports = app;
