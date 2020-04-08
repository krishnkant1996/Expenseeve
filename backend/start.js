const env = require('./env');
const config = require('./config');
require('./init_db');
require('./routes/expense');
var cors = require('cors');

const bodyParser = require("body-parser");
const app = require('express')();
const expense = require('./schemas/expense');
const category = require('./schemas/category');
app.use(cors());

// examples of crufd
// budget.saveBudget({
//   amount: 137,
// }, (err, res) => {console.log(31, err, res)});
// budget.findOneBudget({
//   amount: 137,
// }, (err, res) => {console.log(31, err, res)});
// const expense = require('./schemas/expense');
// expense.saveExpense({
//   name: 'dcsdc',
// }, (err, res) => {console.log(31, err, res)});


const port = config.port;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Congratulations, app listening at http://localhost:${port}`))

app.post('/expense', (req, res) => {
    const { body } = req;
    const { categoryName, name, amount,date } = body;
    console.log(35, body)
    if (!categoryName || !name || !amount) {
        return res.status(400).send('Incorrect payload send kar-ditta tussi paaji');
    }
    category.findOneCategory({ name: categoryName }, (err, catData) => {
        if (err || catData._id === null) return res.status(400).send(err);
        console.log(40, catData)
        let obj = {
            name,
            amount,
            categoryId: catData._id,
            categoryName,
            date
        }
        console.log(46, catData, obj)
        expense.saveExpense(obj, (err, data) => {
            if (err) return res.status(400).send(err);
            return res.status(200).send(data);
        });
    })
});

app.get('/all-expenses', (req, res) => {
    expense.findAllExpense((err, data) => {
        if (err) return res.status(400).send(err);
        return res.status(200).send(data);
    })
})

// routes for categories

app.post('/category', (req, res) => {
    const { body } = req;
    category.saveCategory(body, (err, data) => {
        if (err) return res.status(400).send(err);
        return res.status(200).send(data);

    })
})

app.get('/all-categories', (req, res) => {
    category.findAllCategory((err, data) => {
        if (err) return res.status(400).send(err);
        return res.status(200).send(data);
    })
})
