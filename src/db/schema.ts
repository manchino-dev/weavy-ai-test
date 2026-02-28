import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const leads = sqliteTable("leads", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    email: text("email").notNull(),
    message: text("message"),
    createdAt: text("created_at")
        .default(sql`(CURRENT_TIMESTAMP)`)
        .notNull(),
});
