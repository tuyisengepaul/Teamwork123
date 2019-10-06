import Database from './dbquerie';

const dropTable = async () => {
  const conn = Database.dbConnection();
  const result = await conn.query(`
    DROP TABLE IF EXISTS users CASCADE;
    DROP TABLE IF EXISTS comments CASCADE;
    DROP TABLE IF EXISTS articles CASCADE;
  `);
  await conn.end();
  return result;
};

dropTable();
