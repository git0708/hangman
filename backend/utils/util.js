const errorHandlerMiddle = (error, request, response, next) => {
    // Error handling middleware functionality
    console.log(`error ${error.message}`) // log the error
    const status = error.status || 400
    // send back an easily understandable error message to the caller
    response.status(status).send(error.message)
}

const promiseHandler = async (fn) => {
    try {
        let response = await fn();
        if (response?.status === 200) {
            return response;
        }
        throw Error(response)
    } catch (error) {
        console.log('error', error);
        throw Error('Network error')
    }
}

const connectDB = async (connect) => {
    try {
        const conn = await connect(process.env.MONGO_CONNECTION);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = { connectDB, errorHandlerMiddle, promiseHandler }