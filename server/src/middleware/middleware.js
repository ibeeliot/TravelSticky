// separate concners by putting errors in separate file

const pageNotFound = (req, res, next) => {
    // creating new error variable that mentions the path of the request
    const error = new Error(`You are in the wrong neighborhood, homie. Ain't nothing here at: ${req.originalUrl}`);
    res.status(404);
    // use next for errors to properly send back to user
    next(error);
}


const errorHandler = (error, req, res, next) => {
    // if status code is equal to 200 coming in, then change to 500, otherwise 
    // stick with the status code given
    // 200 status codes are good, so we must pay attention to what's going on with those
    // middlewares more than other status codes that's erroring
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; 
    // error message created by previous error handler. .message is the inherent key for errors
    

    // stack traces = modules using currently
    // in prouction environment (NODE_ENV === production), we'll show another version of the 404
    // to show ONLY the route endpoint
    // res.status(statusCode).end(error.message)
    
    res.status(statusCode).json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? `🙋`: error.stack
    })
}


// exporting ALL at once

module.exports = {
    pageNotFound,
    errorHandler
}
