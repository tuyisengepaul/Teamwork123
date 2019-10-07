import Database from './dbquerie';

const { admin } = process.env;
const NewAdmin = JSON.parse(admin);


const createAdmin = async () => {
  const conn = Database.dbConnection();
  const result = await conn.query(`INSERT into users (firstname, lastname, email, password, gender, jobrole, department, address, type ) VALUES (
    '${NewAdmin.firstName}',
    '${NewAdmin.lastName}',
    '${NewAdmin.email}',
    '${NewAdmin.password}',
    '${NewAdmin.gender}',
    '${NewAdmin.jobRole}',
    '${NewAdmin.department}',
    '${NewAdmin.address}',
    '${NewAdmin.type}') on conflict (email) do nothing
    returning *`);
  await conn.end();

  return result;
};

createAdmin();
