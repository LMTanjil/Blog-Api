export const blogMiddleware = (req, res, next) => {
    try{
        console.log({
            message: 'From blog middleware',
            from: `Request received: ${req.method} - ${req.originalUrl}`,
            method : req.method,
            url : req.originalUrl,

        })
        next();
    }catch(err){
        console.error(err.message);
        res.status(500).json({
            message: "Middleware error",
            error: err.message
        });
    }
}