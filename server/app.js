const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const dishesRouter = require("./routes/Dishes/Dishes.route");
const blogsRouter = require("./routes/Blogs/Blogs.route");
const chefsRouter = require("./routes/Chefs/Chefs.route");
const usersRouter = require("./routes/Users/Users.route");
const newsletterRouter = require("./routes/Newsletter/Newsletter.route");
const reservationRouter = require("./routes/Reservation/Reservation.route");

const app = express();

app.use(morgan("combined"));
app.use(
	cors({
		origin: "*",
	})
);

app.use(express.json());
app.use("/api", dishesRouter);
app.use("/api", blogsRouter);
app.use("/api", chefsRouter);
app.use("/api", usersRouter);
app.use("/api", newsletterRouter);
app.use("/api", reservationRouter);

// For  images

app.use("/photos", express.static("uploads"));

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/*", express.static(path.join(__dirname, "public", "index.html")));

module.exports = app;
