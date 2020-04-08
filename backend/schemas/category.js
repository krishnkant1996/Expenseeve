const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    status:{type:Number,default:1}
});
const Category = mongoose.model('CategorySchema', categorySchema);

// module.exports = Expense;

const saveCategory = (obj, cb) => {
    const saveObj = new Category(obj);
    saveObj.save(cb);
}



const deleteCategory = (id, cb) => {
    Category.updateOne({_id:id},{status :"0"}).then((res)=>{
        cb(null, res)
    });
}

const findOneCategory = (obj, cb) => {
    return Category.findOne(obj, cb);
}

const findAllCategory = (cb) => {
    return Category.find({ status:1 }).
    then(res => {   
        cb(null,res)           
    })
}

module.exports = {saveCategory, deleteCategory, findOneCategory, findAllCategory};