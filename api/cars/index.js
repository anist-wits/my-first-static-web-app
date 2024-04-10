module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    cars = require('../../src/cars.json');

    context.res = {
        status: 200, /* Defaults to 200 */
        body: cars
    }

}