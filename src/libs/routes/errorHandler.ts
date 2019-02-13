const errorHandler = (err, req, res, next) => {
    res.json({
        error: err || 'Not Found',
        message: 'error',
        status: 500,
        timestamp: new Date(),
    });
};

export default errorHandler;
