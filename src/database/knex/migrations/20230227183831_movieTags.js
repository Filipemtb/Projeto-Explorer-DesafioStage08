exports.up = knex => knex.schema.createTable("tags", table => {

  table.increments("id");
  table.text("name");

  table.integer("note_id").references("id").inTable("note").onDelete("CASCADE");
  table.integer("user_id").references("id").inTable("users");
});

exports.down = knex => knex.schemas.dropTable("tags");