const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    categoryId: String,
    categoryName: String,
    date: Date,
    status:{type:Number,default:1}
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
    const {id} = obj;
    Expense.updateOne({_id:id},obj).then((res)=>{
        cb(null, res)
    });
}

const deleteExpense = (id, cb) => {
    Expense.updateOne({_id:id},{status :"0"}).then((res)=>{
        cb(null, res)
    });
}

const findOneExpense = (obj, cb) => {
    return Expense.find(obj, cb);
}

const findAllExpense = (cb) => {
    return Expense.find({ status:1 }).
        then(res => {   
            cb(null,res)           
        })
}

module.exports = {saveExpense, getExpense, updateExpense, deleteExpense, findOneExpense, findAllExpense};