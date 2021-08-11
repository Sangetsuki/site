import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('users', table => {
		table.increments('id').unique();
		table.string('name');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('users');
}

