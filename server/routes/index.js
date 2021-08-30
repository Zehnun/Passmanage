require('dotenv').config()
var express = require('express');
const app = express();
var router = express.Router();
const bodyParser = require('body-parser');
//const { request } = require('../app');

var cors = require('cors');
router.use(cors({
  origin: "http://localhost:3000",
  credentials: true
  })
);
var count = 0;
var selfnum = 0;
const pool = require("../db");

var cookieParser = require('cookie-parser');
// Routes //
// get all todos
const jwt = require('jsonwebtoken')

router.use(express.urlencoded({ extended: true}));

//router.use(express.urlencoded({extended: true}))

//router.use(express.json())
router.use(cookieParser())
// create a todo
/*
router.post("/signin", (req, res) =>{
  const { sentemail, sentpassword } = req.body;
  const useremail = { email: sentemail }
  const userpassword = { password: sentpassword }
  const accessToken = jwt.sign(useremail, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken: accessToken })
})

function authenticateToken(req, res, next) {
  const authHeader = req.header['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, useremail) => {
    if(err) return res.sendStatus(403)
    req.email = useremail
    next()
  })
}
*/
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    //count = count + 1;
    const getHome = await pool.query(
      "SELECT * FROM manage.muser WHERE email = $1 AND pass = $2", 
      [email, password]
    );
    // res.send(getHome.rows[0].email + " " + email + " " + getHome.rows[0].pass + " " + password); 
    //if(getHome.rows[0].email != email && getHome.rows[0].pass != password){
    //res.send("sucess, sign in " + getHome.rows[0].email + " " + getHome.rows[0].pass );
    // sent cookies
    res.cookie('email', email);
    res.cookie('pass', password);

    res.send(getHome.rows[0])
  } catch (err) {
    res.send("fail")
    console.error("Error: " + err.message);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    //count = count + 1;
    const newUser = await pool.query(
      "INSERT INTO manage.muser (email, pass) VALUES($1, $2) RETURNING *",
      [email, password]
    );

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
/*
function validateCookie(req, res, next){
  const { cookies } = req;
  console.log(cookies);
  next();
}
*/
router.post("/Add", async (req, res) => {
  try {
    const { org, email, password } = req.body;
    // username andd password
    selfnum = selfnum + 1;
    
    const { cookies } = req;
    
    const getId = await pool.query(
      "SELECT * FROM manage.muser WHERE email = $1 AND pass = $2", 
      [cookies.email, cookies.pass]
    )
    const UserId = getId.rows[0].manid;
    
    const newPass = await pool.query(
      "INSERT INTO manage.box (manid, selfid, names, email, sepass) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [UserId, selfnum, org, email, password]
    );
    //console.console("try: " + document.cookie);
  
    //console.log(UserId);

    res.json(newPass.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/delete", async (req, res) => {
  try {
    const { names, email } = req.body;

    const delVal = await pool.query(
      "DELETE FROM manage.box WHERE names = $1 AND email = $2",
      [names, email]
    )
    res.json("deleted");
  } catch (err){
    console.error(err.message);
  }
});

router.get("/main", async(req, res) => {
  try {
    const { cookies } = req;

    const getId = await pool.query(
      "SELECT * FROM manage.muser WHERE email = $1 AND pass = $2", 
      [cookies.email, cookies.pass]
    )
    const UserId = getId.rows[0].manid;

    const getPass = await pool.query(
      "SELECT * FROM manage.box WHERE manid = $1",
      [UserId]
    );
    
    /*res.json(getPass.filter(getPass => getPass.manid === req.useremail))
    res.json(getPass.rows);*/
    
    res.send(getPass.rows)
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
