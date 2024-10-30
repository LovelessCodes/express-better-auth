import { toNodeHandler } from "better-auth/node";
import express from "express";
import { auth } from "./auth.js";

const app = express();
const port = 3169;

app.all("/api/auth/*", toNodeHandler(auth));

app.listen(port, () => {
	console.log(`Better Auth x Express app listening on port ${port}`);
});
