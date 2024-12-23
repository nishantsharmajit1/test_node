const userRouter = require("./modules/user/route/userRoute");

// Primary routes
exports.routes = [
    {
        path : "/api/user",
        handler : userRouter,
        schema : 'User'
    },
]


// http://localhost:5000/api/user/create-user