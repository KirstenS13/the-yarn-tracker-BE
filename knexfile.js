module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // required for sqlite3
    connection: {
      filename: './data/yarn.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connections is made to the sqlite3 engine
        conn.run('PRAGMA foreign_keys = ON', done); // enforces foreign keys
      },
    },
  },

};
