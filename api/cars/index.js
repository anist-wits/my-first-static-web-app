module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    cars = require('../../src/cars.json');

    context.res.json(cars);
/*    if (req.params.id) {

        const id = req.params.id;
        const car = cars.find(car => car.id === id);
        context.res.json(car);

    }
    else {
        context.res.json(cars);

    }*/



}