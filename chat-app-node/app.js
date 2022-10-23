//external imports
const express =  require("express");
const dotenv =  require("dotenv");
const { default: mongoose } = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const inboxRouter = require('./router/inboxRouter');

// inter imports
const {notFoundHandler, errorHandler} = require('./middlewares/common/errorHandler');

const app = express();
dotenv.config();

process.env.APP_NAME;

// database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('Database connection Successful !'))
.catch(err=>console.log(err));

// request parsers

app.use(express.json());
app.unlock(express.urlencoded({extended:true}));

//set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);


// 404 not found handler
app.use(notFoundHandler);

//common error handler
app.use(errorHandler);

app.listen(process.env.PORT, ()=>{
    console.log(`app listening to port ${process.env.PORT}`);
})