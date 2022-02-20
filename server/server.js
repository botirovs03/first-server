const express = require("express");

const port = 3000;

const app = express();

const path = require("path")

app.use('/', express.static(path.join(__dirname,'./../public')));

const cors = require('cors')
app.use(cors())

const db = require("./db")

const bodyParser = require("body-parser");
const { redirect } = require("express/lib/response");


app.get("/api/dictionary", async (req, res) => {
    let offset = parseInt(req.query.offset)  || 0
    let limit =  parseInt(req.query.limit) || 10
    let search = req.query.search
    let params = [offset, limit]
    let sql = "SELECT * FROM csvdb.words where eng = ? OR jap = ?"

    // if (search) {
    //     sql = "SELECT * FROM csvdb.words WHERE eng LIKE ? LIMIT ?, ?"
    //     params = [`%${search}%`, offset, limit]
    // }

    console.log(offset, limit, search)

    try {
        const results = await db.query(sql, [search, search])
        console.log(results)
        await res.json(results);
    } catch (err) {
        await res.json(err)
    }
})


app.use(bodyParser.urlencoded({
    extended:true
}));

let getd;
app.post("/po", function(req, res) {
      getd = req.body.user.name;
    return res.redirect('/')
  });
//run the application
app.listen(port, () => {
    console.log(`running at port ${port}`);
});

