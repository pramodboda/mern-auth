import express from "express";
import dotenv from "dotenv";

dotenv.config();

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;

import userRoutes from "./routes/userRoutes.js";

const app = express();

// route
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

// custom error handler - start
app.use(notFound);
app.use(errorHandler);
// custom error handler - end

app.listen(port, () => console.log(`Server started on port on port ${port}`));

// ** POST /api/users ** - Register a user
// ** POST /api/users/auth ** - Authenticate a user and get token
// ** POST /api/users/logout ** - Logout user and clear cookie
// ** GET /api/users/profile ** - Get user profile
// ** PUT /api/users/profile ** - Update user profile
