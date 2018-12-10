
exports.up = function(knex, Promise) {
  return knex.schema.createTable('transactions', (table)=>{
    table.increments();
    table.integer('user_id')
          .references('id')
          .inTable('users')
          .index()
          .onDelete('CASCADE');
    table.decimal('amount',14,2);
    table.string('type');
    table.string('business_name');
    table.timestamps(true, true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('transactions')
};
