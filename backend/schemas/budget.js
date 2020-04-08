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
const updateBudget = (obj, cb) => {
    const {id} = obj;
    Budget.updateOne({_id:id},obj).then((res)=>{
        cb(null, res)
    });
}
const findOneBudget = (obj=null, cb) => {
    return Budget.findOne(obj, cb);
}

const findAllBudget = (cb) => {
    return Budget.find(cb);
}

module.exports = {saveBudget, updateBudget, findAllBudget, findOneBudget};