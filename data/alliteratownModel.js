const db = require('./dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db('residents').select('id', 'name');
}

function findBy(filter) {
  return db('residents').where(filter);
}

async function add(resident) {
  const [id] = await db('residents').insert(resident);
  return findById;
}

function findById(id) {
  return db('residents')
    .select('id', 'name')
    .where({ id })
    .first();
}