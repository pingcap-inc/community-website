module.exports = ({ env }) => {
  const isSQLite = env('STRAPI_DB_CLIENT', 'mysql') === 'sqlite';

  const defaultConnection = {
    connector: 'bookshelf',
    settings: {
      client: 'mysql',
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      username: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', ''),
      charset: 'utf8mb4',
    },
    options: {
      charset: 'utf8mb4',
    },
  };

  if (isSQLite) {
    defaultConnection.settings = {
      client: 'sqlite',
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    };

    defaultConnection.options = {
      useNullAsDefault: true,
    };
  }

  return {
    defaultConnection: 'default',
    connections: {
      default: defaultConnection,
    },
  };
};
