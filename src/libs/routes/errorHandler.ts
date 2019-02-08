const errorHandler = (err,req, res) => {
    res.json({
        error: err||"Not Found",
        message: "error",
        status: 500,
        timestamp: new Date()
    })
}

export default errorHandler;