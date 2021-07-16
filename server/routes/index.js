var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
//const { request } = require('../app');
const app = express();
var cors = require("cors");
app.use(cors({
  origin: "*",
  })
);
var count = 0;
var selfnum = 0;
const pool = require("../db");


// Routes //
// get all todos




router.use(express.json())

// create a todo

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    count = count + 1;
    const getHome = await pool.query(
      "SELECT * FROM manage.muser WHERE email = $1 AND pass = $2", 
      [email, password]
    );

    res.json(getHome.rows[0]);
  } catch (err) {
    console.error("Error: " + err.message);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    count = count + 1;
    const newUser = await pool.query(
      "INSERT INTO manage.muser (email, pass, manid) VALUES($1, $2, $3) RETURNING *",
      [email, password, count]
    );

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/Add", async (req, res) => {
  try {
    const { org, email, password } = req.body;
    selfnum = selfnum + 1;
    const newPass = await pool.query(
      "INSERT INTO manage.box (manid, selfid, names, email, sepass) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [count, selfnum, org, email, password]
    );

    res.json(newPass.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/main", async (req, res) => {
  try {
    const getPass = await pool.query(
      "SELECT * FROM manage.box"
    );
    res.json(getPass.rows);
  } catch (err) {
    console.error(err.message);
  }
});

/*
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    count = count + 1;
    const getHome = await pool.query(
      "SELECT * FROM manage.muser WHERE email LIKE VALUES($1) RETURNING *", 
      [email]
    );

    res.json(getHome.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});




//get all todos

router.get("/main", async (req, res) => {
  try {
    const getPass = await pool.query(
      "SELECT * FROM todo"
    );
    res.json(getPass.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});




*/




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expfdfdress' });
  console.log('received megggssage get')
});
/*
router.post('/', urlencodedParser, function (req, res) {
  res.end('It worked!' + req.body.email + ' ' + req.body.password);
})
*/
module.exports = router;
