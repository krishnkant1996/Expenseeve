const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
});
const Category = mongoose.model('CategorySchema', categorySchema);

// module.exports = Expense;

const saveCategory = (obj, cb) => {
    const saveObj = new Category(obj);
    console.log(12, obj, saveObj, cb)
    saveObj.save(cb);
}

const getCategory = (obj, cb) => {
    const saveObj = new Category(obj);
    saveObj.save(cb);
}

const updateCategory = (obj, cb) => {
    const saveObj = new Category(obj);
    saveObj.save(cb);
}

const deleteCategory = (obj, cb) => {
    const saveObj = new Category(obj);
    saveObj.save(cb);
}

const findOneCategory = (obj, cb) => {
    return Category.findOne(obj, cb);
}

const findAllCategory = (cb) => {
    return Category.find(cb);
}

module.exports = {saveCategory, getCategory, updateCategory, deleteCategory, findOneCategory, findAllCategory};