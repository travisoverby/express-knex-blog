
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments('id').primary();
    table.string('body');
    table.integer('author_id').unsigned().references('uid').inTable('users');
    table.integer('post_id').unsigned().references('id').inTable('posts');
    table.dateTime('postDate');
   });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
