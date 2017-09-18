exports.up = function(knex, Promise) {

        return knex.schema.createTable('users', function(table) {
          table.increments('uid').primary();
          table.string('username');
          table.string('password');
          table.string('name');
          table.string('email');
          table.timestamps();
         })

};


exports.down = function(knex, Promise) {  
       return knex.schema.dropTable('users')
};
