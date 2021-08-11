import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('pokemons', table => {
		table.increments('id').unique();
		table.integer('owner').references('id').inTable('users');
		table.string('name');
		table.string('file');
	});
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('pokemons');
}

