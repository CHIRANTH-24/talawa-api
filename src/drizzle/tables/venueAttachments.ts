import { relations, sql } from "drizzle-orm";
import { index, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { venueAttachmentTypeEnum } from "~/src/drizzle/enums/venueAttachmentType";
import { usersTable } from "./users";
import { venuesTable } from "./venues";

/**
 * Drizzle orm postgres table definition for venue attachments.
 */
export const venueAttachmentsTable = pgTable(
	"venue_attachments",
	{
		/**
		 * Date time at the time the attachment was created.
		 */
		createdAt: timestamp("created_at", {
			mode: "date",
			precision: 3,
			withTimezone: true,
		})
			.notNull()
			.defaultNow(),
		/**
		 * Foreign key reference to the id of the user who created the attachment.
		 */
		creatorId: uuid("creator_id").references(() => usersTable.id, {
			onDelete: "set null",
			onUpdate: "cascade",
		}),
		/**
		 * Type of the attachment.
		 */
		type: text("type", {
			enum: venueAttachmentTypeEnum.options,
		}).notNull(),
		/**
		 * Date time at the time the attachment was last updated.
		 */
		updatedAt: timestamp("updated_at", {
			mode: "date",
			precision: 3,
			withTimezone: true,
		})
			.$defaultFn(() => sql`${null}`)
			.$onUpdate(() => new Date()),
		/**
		 * Foreign key reference to the id of the user who last updated the attachment.
		 */
		updaterId: uuid("updater_id").references(() => usersTable.id, {
			onDelete: "set null",
			onUpdate: "cascade",
		}),
		/**
		 * URI to the attachment.
		 */
		uri: text("uri", {}).notNull(),
		/**
		 * Foreign key reference to the id of the venue that the attachment is associated to.
		 */
		venueId: uuid("venue_id")
			.notNull()
			.references(() => venuesTable.id, {
				onDelete: "cascade",
				onUpdate: "cascade",
			}),
	},
	(self) => [
		index().on(self.createdAt),
		index().on(self.creatorId),
		index().on(self.venueId),
	],
);

export const venueAttachmentsTableRelations = relations(
	venueAttachmentsTable,
	({ one }) => ({
		/**
		 * Many to one relationship from `venue_attachments` table to `users` table.
		 */
		creator: one(usersTable, {
			fields: [venueAttachmentsTable.creatorId],
			references: [usersTable.id],
			relationName: "venue_attachments.creator_id:users.id",
		}),
		/**
		 * Many to one relationship from `venue_attachments` table to `users` table.
		 */
		updater: one(usersTable, {
			fields: [venueAttachmentsTable.updaterId],
			references: [usersTable.id],
			relationName: "venue_attachments.updater_id:users.id",
		}),
		/**
		 * Many to one relationship from `venue_attachments` table to `venues` table.
		 */
		venue: one(venuesTable, {
			fields: [venueAttachmentsTable.venueId],
			references: [venuesTable.id],
			relationName: "venue_attachments.venue_id:venues.id",
		}),
	}),
);

export const venueAttachmentsTableInsertSchema = createInsertSchema(
	venueAttachmentsTable,
	{
		uri: (schema) => schema.uri.min(1),
	},
);