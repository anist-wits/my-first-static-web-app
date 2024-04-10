module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));

    cars = [
        {
            "id":"1",
            "make": "Toyota",
            "model": "Camry",
            "year": 2022,
            "price": 250000
        },
        {
            "id":"2",
            "make": "Honda",
            "model": "Accord",
            "year": 2021,
            "price": 200000
        },
        {
            "id":"3",
            "make": "Ford",
            "model": "Mustang",
            "year": 2020,
            "price": 300000
        }
    ];

    const newCar = req.body;

    console.log(newCar);
    cars.push(newCar);

    context.res = {
        status: 200, /* Defaults to 200 */
        body: newCar
    }

}