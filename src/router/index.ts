import express from "express";
import authorization from "../middleware/authorization";

import authRouter from "./auth.router";
import suppotRouter from "./support.router";
import sellRouter from "./sell.router";
import clientRouter from "./client.router";
import productRouter from "./product.router";

const app = express();

app.use("/auth", authRouter);
app.use(authorization)
app.use("/support", suppotRouter);
app.use("/sell", sellRouter);
app.use("/client", clientRouter);
app.use("/product", productRouter);

export default app;