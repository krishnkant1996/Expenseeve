const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    amount: Number,
    lastUpdated: { type: Date, default: Date.now },
});

const Budget = mongoose.model('BudgetSchema', budgetSchema);

const saveBudget = (obj, cb) => {
    const saveObj = new Budget(obj);
    saveObj.save(cb);
}

const getBudget = (obj, cb) => {
    const saveObj = new Budget(obj);
    saveObj.save(cb);
}

const updateBudget = (obj, cb) => {
    const saveObj = new Budget(obj);
    saveObj.save(cb);
}

const deleteBudget = (obj, cb) => {
    const saveObj = new Budget(obj);
    saveObj.save(cb);
}

const findOneBudget = (obj=null, cb) => {
    return Budget.find(obj, cb);
}

const findAllBudget = (cb) => {
    return Budget.find(cb);
}

module.exports = {saveBudget, getBudget, updateBudget, deleteBudget, findAllBudget, findOneBudget};