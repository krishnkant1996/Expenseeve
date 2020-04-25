const env = require('./env');
const config = require('./config');
require('./init_db');
var cors = require('cors');

const bodyParser = require("body-parser");
const app = require('express')();
const expense = require('./schemas/expense');
const category = require('./schemas/category');
const budget = require('./schemas/budget');
app.use(cors());

const port = config.port;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Congratulations, app listening at http://localhost:${port}`))

app.post('/expense', (req, res) => {
    const { body } = req;
    const { categoryName, name, amount,date,id } = body;

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
            date,
            id
        }
        console.log(46, catData, obj)
        if(id){
            console.log(49, obj)

            expense.updateExpense(obj, (err, data) => {
                if (err) return res.status(400).send(err);
                return res.status(200).send(data);
            }); 
        }else{
            console.log(400, obj)

            expense.saveExpense(obj, (err, data) => {
                if (err) return res.status(400).send(err);
                return res.status(200).send(data);
            });
        }
       
    })
});

app.post('/expense-delete', (req, res) => {
    const { body } = req;
    const { id } = body;
    if (!id ) {
        return res.status(400).send('Incorrect payload send kar-ditta tussi paaji');
    }
    expense.deleteExpense(id, (err, data) => {
        if (err) return res.status(400).send(err);
        return res.status(200).send(data);
    })
});


app.get('/all-expenses', (req, res) => {
    expense.findAllExpense((err, data) => {
        if (err) return res.status(400).send(err);
        console.log(data)
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
app.post('/category-delete', (req, res) => {
    const { body } = req;
    const { id } = body;
    if (!id ) {
        return res.status(400).send('Incorrect payload send kar-ditta tussi paaji');
    }
    category.deleteCategory(id, (err, data) => {
        if (err) return res.status(400).send(err);
        return res.status(200).send(data);
    })
});

app.get('/all-categories', (req, res) => {
    category.findAllCategory((err, data) => {
        if (err) return res.status(400).send(err);
        return res.status(200).send(data);
    })
})

app.post('/budget', (req, res) => {
    const { body } = req;
    if(body.id){
        budget.updateBudget(body, (err, data) => {
            if (err) return res.status(400).send(err);
            return res.status(200).send(data);
    
        })
    }else{
        budget.saveBudget(body, (err, data) => {
            if (err) return res.status(400).send(err);
            return res.status(200).send(data);
    
        })
    }
    
})
app.get('/get-budget', (req, res) => {
    budget.findOneBudget((err, data) => {
        if (err) return res.status(400).send(err);
        return res.status(200).send(data);
    })
})
