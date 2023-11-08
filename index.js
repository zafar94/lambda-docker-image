exports.handler = function (event, context) {
    console.log('BEFORE RETURN ')
    return { status: 200, res: "Hello World!" };
};