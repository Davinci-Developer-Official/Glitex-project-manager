require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require("mongoose");
const connectDB = require('../src/config/dbConn');
const v1AuthRoute = require("./v1/routes/authRoute");
const v1RegisterRoute = require("./v1/routes/registerRoute");
const v1UserRoutes = require("./v1/routes/userRoutes");
const v1TokenRefreshRoute = require("./v1/routes/refreshRoute");
const v1LogoutRoute = require("./v1/routes/logoutRoute");
const v1EmailRoute = require("./v1/routes/emailRoute");
const v1RoleRoutes = require("./v1/routes/roleRoutes");
const v1DocumentRoutes = require("./v1/routes/documentRoutes");
const v1CommentRoutes =  require("./v1/routes/commentRoutes");

// Connect to MongoDB
connectDB();

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//making documents stored accessible
app.use("public/documents", express.static('public/documents'));

//Routes
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.use('/api/v1/register', v1RegisterRoute);
app.use('/api/v1/users', v1UserRoutes);
app.use('/api/v1/auth', v1AuthRoute);
app.use('/api/v1/refresh', v1TokenRefreshRoute);
app.use('/api/v1/logout', v1LogoutRoute);
app.use('/api/v1/email', v1EmailRoute);
app.use('/api/v1/roles', v1RoleRoutes);
app.use('/api/v1/documents', v1DocumentRoutes);
pp.use('/api/v1/comments', v1CommentRoutes);

const PORT = process.env.PORT || 8080;

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on ${PORT} ...`));
});