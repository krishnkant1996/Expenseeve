const init = require('../init');
const expense = require('../schemas/expense');

expense.saveExpense({
    name: 'dcsdc',
}, (err, res) => { console.log(31, err, res) });
