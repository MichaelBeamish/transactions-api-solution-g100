//Update the name of the controller below and rename the file.
const transactions = require("../controllers/transactions.js")
module.exports = function(app){

  app.get('/transactions', transactions.index);
  app.get('/transactions/:id', transactions.getOne);
  app.post('/transactions', transactions.create);
  app.patch('/transactions/:id', transactions.update);
  app.delete('/transactions/:id', transactions.delete);
}
