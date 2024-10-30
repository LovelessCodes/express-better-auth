import { createClient } from "@libsql/client";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/libsql";
import "dotenv/config";

const client = createClient({
	url: process.env.TURSO_DATABASE_URL ?? "file:data.db",
	authToken: process.env.TURSO_AUTH_TOKEN ?? "",
});

const db = drizzle({ client });

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "sqlite",
	}),
});
