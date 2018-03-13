
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(t){
    t.increments('id').primary();
    t.string('comment_body');
    t.integer('author_id').unsigned().references('uid').inTable('users');
    t.integer('post_id').unsigned().references('id').inTable('posts');
    t.timestamps();
   });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
