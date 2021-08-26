import express from "express";
import logger from "morgan";
import ordersRouter from "./routes/orders";
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/orders', ordersRouter);

// catch 404 and forward to error handler
app.use(function(req, res) {
  res.json({
    statusCode: 404
  })
});

// error handler
app.use(function(err, req, res, next) {
  res.json({
    statusCode: 500,
    message: err.message,
    stack: err.stack
  })
});

export default app;
