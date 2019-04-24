import test from 'ava'
import request from 'supertest'
import MongodbMemoryServer from 'mongodb-memory-server'

test.before(async (t) => {
    // This runs before all tests
    const mongod = new MongodbMemoryServer({
        instance: {
            port: 37001,
            ip: "127.0.0.1",
            dbName: "todoTEST"
        }
    });

    const uri = await mongod.getConnectionString();
    console.log("🔥" + uri);
    const app = require('../app');

    t.context.app = app;
    t.context.mongod = mongod;

});

test.serial('User signup', async t => {
    let response = await request(t.context.app)
        .post('/users/signup')
        .send({
            "username": "GoodBytes",
            "password": "this is not safe"
        });
    t.is(response.status, 200);
    t.is(response.body.status, "success");
});

test.after.always(t => {
    t.context.mongod.stop();
});