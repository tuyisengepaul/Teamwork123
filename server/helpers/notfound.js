import returnResponse from './returnResponse';
import Database from '../database/dbquerie';

const notfound = async (req, res, next, message, table, atribute, value) => {
  const existItem = await Database.selectBy(table, atribute, value);
  if (existItem.rowCount === 0) {
    return returnResponse(req, res, 404, message);
  }
  return next();
};

export default notfound;
