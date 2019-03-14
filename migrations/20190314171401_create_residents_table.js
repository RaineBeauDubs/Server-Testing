
exports.up = function(knex, Promise) {
  return knex.schema.createTable('residents', residents => {
    residents.increments();

    residents
      .string('name', 128)
      .notNullable();
    
    residents
      .string('pet', 128)
      .notNullable();

      residents
      .string('petSpecies', 128)
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('residents');
};
