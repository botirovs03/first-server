const express = require("express");

const port = 3000;

const app = express();

const path = require("path")

app.use('/', express.static(path.join(__dirname,'./../public')));

const cors = require('cors')
app.use(cors())

const db = require("./db")

app.get("/api/dictionary", async (req, res) => {
    let offset = parseInt(req.query.offset)  || 0
    let limit =  parseInt(req.query.limit) || 10
    let search = req.query.search
    let params = [offset, limit]
    let sql = "SELECT * FROM firstdb.dict LIMIT ?, ?"

    if (search) {
        sql = "SELECT * FROM firstdb.dict WHERE Eng LIKE ? LIMIT ?, ?"
        params = [`%${search}%`, offset, limit]
    }

    console.log(offset, limit, search)

    try {
        const results = await db.query(sql, params)
        console.log(results)
        await res.json(results);
    } catch (err) {
        await res.json(err)
    }
})


//run the application
app.listen(port, () => {
    console.log(`running at port ${port}`);
});

