const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    categoryId: String,
});
const Expense = mongoose.model('ExpenseSchema', expenseSchema);

// module.exports = Expense;

const saveExpense = (obj, cb) => {
    const saveObj = new Expense(obj);
    console.log(14, obj, saveObj, cb)
    saveObj.save(cb);
}

const getExpense = (obj, cb) => {
    const saveObj = new Expense(obj);
    saveObj.save(cb);
}

const updateExpense = (obj, cb) => {
    const saveObj = new Expense(obj);
    saveObj.save(cb);
}

const deleteExpense = (obj, cb) => {
    const saveObj = new Expense(obj);
    saveObj.save(cb);
}

const findOneExpense = (obj, cb) => {
    return Expense.find(obj, cb);
}

const findAllExpense = (cb) => {
    return Expense.find(cb);
}

module.exports = {saveExpense, getExpense, updateExpense, deleteExpense, findOneExpense, findAllExpense};