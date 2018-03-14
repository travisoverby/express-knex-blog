
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(t){
    t.increments('id').primary();
    t.string('title');
    t.string('desciption');
    t.integer('author_id').unsigned().references('uid').inTable('users');
    t.timestamps();
  });
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('posts'); 
};
