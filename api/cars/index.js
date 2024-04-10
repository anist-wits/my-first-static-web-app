module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const cars = require('../../src/cars.json');

    context.res.json(cars);
}