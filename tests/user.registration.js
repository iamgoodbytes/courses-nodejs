// import required libraries
import test from 'ava'
import MongodbMemoryServer from 'mongodb-memory-server'
import request from 'supertest'

// import our model
const User = require('../models/User');

// do this before the tests start running
test.before(async t => {
    console.log("Starting tests 🔥");
    const mongod = new MongodbMemoryServer({
        instance: {
            port: 49326, // something that should be available
            ip: "127.0.0.1",
            dbName: "todoAvaTest"
        }
    });

    // wait for the connection to be ready (this means the server has started)
    const uri = await mongod.getConnectionString();

    // next, load up the app 
    const app = require('../app');

    // make the app and mongod variables available in every test (via context)
    t.context.app = app;
    t.context.mongod = mongod;
});

// after all tests, let's shut down the local mongo server
test.after.always(async t => {
    t.context.mongod.stop()
})

// before every test, let's create some test data
test.beforeEach(async (t) => {
    await User.deleteMany({});

    const user = new User({
        email: 'one@example.com',
        name: 'One'
    });
    await user.save();
});

// after every test, let's clean up our test data
test.afterEach.always(async () => await User.deleteMany({}));

// running tests in serial is a good idea when creating data for each test
// running tests in serial prevents one test to influence the database for another test
test.serial('creating a user', async t => {
    const response = await request(t.context.app)
        .post('/users/signup')
        .send({
            username: 'john',
            password: 'ronson'
        });

    t.is(response.status, 200);
    //t.is(response.)
})