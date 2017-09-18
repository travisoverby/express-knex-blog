
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
    table.increments('id').primary();
    table.string('title');
    table.string('body');
    table.integer('author_id').unsigned().references('uid').inTable('users');
    table.dateTime('postDate');
  });
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('posts'); 
};
