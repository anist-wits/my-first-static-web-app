module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));

    cars = require('../../src/cars.json');

    const newCar = req.body;

    console.log(newCar);
    cars.push(newCar);

    context.res = {
        status: 200, /* Defaults to 200 */
        body: newCar
    }

}