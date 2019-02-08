const notFoundRoutes = (req, res, next) => {
        next("Not Found");
}

export default notFoundRoutes;