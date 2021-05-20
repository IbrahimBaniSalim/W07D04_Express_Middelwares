const express = require("express");

const app = express();
const port = 3000;
const morgan = require("morgan")
const users = ["John", "Mark"];
const products = ["mouse", "keyboard"];
app.use(parsejosn());
const newexress = express.Router();
const creat = express.Router();
const prouduct1 = express.Router();

//q1
const logUsers = (req, res, next) => {
    console.log(users);
    next();
}

//q2
app.use(logUsers)

//q3
const logMethod = (req, res, next) => {
    res.json(users)
    next();
}
const parsejosn = (req, res, next) => {
    req.body.json(JSON.parse)
    next()
}
app.get("/users", logMethod, (req, res) => {

});


app.get("/users", (req, res, next) => {
    res.json(users);
});


app.get("/", (req, res, next) => {
    if (users == []) {
        const err = new Error("Internal server error");
        err.status = 500;
    }

    next(err);
});

newexress.use("/user", (req, res, next) => {
    res.json(users)
    next();
})

creat.post("/users/create", (req, res, next) => {
    const person = req.body.json
    users.push(person)
    next();
})

prouduct1.get("/prouduct", (req, res, next) => {
    res.json(prouducts)
    next()
})
prouduct1.put("/products/update", (req, res, next) => {
    const name = prouducts.find(req.body.name)
    products.push(name);
})
prouduct1.use((req, res, next) => {
    console.log("products router");
    next();
});
app.get(" ", (req, res, next) => {

    const err = new Error("NOT FOUND");
    err.status = 404;


    next(err);
});









app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});