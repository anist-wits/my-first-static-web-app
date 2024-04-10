module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));

    const id = context.bindingData.id;

    const index = cars.findIndex(car => car.id === id);
    cars.splice(index, 1);
    

    const responseMessage = { message: `Car with id ${id} deleted` };

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}