
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post_details', function(t){
    t.increments('id').primary();
    t.integer('post_id').unsigned().references('id').inTable('posts');
		t.text('body');
    t.timestamps();
   });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post_details');
};

