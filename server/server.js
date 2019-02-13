
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const hikingRouter= require('./routes/hiking.router');
const dualsportRouter = require('./routes/dualsport.router');
const roadRouter = require('./routes/road.router');
const photographyRouter = require('./routes/photography.router');
const recentRouter = require('./routes/recent.router');
const detailRouter = require('./routes/detail.router');
const typeRouter = require('./routes/type.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/hiking',hikingRouter);
app.use('/api/dualsport',dualsportRouter);
app.use('/api/road',roadRouter);
app.use('/api/photography',photographyRouter);
app.use('/api/recent',recentRouter);
app.use('/api/detail',detailRouter);
app.use('/api/type',typeRouter);



// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
