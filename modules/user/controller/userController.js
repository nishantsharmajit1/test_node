const User = require('../model/userModel');
const bcrypt = require('bcryptjs');

// Logics
/*

Create => new keyword & save method
Find => find (for multiple data) 
        findOne (For  one data)
Update => updateAll (for multiple data)  
        updateOne (for one data)
Delete => delete (for multiple data)
        deleteOne (for one data)              

*/
exports.createUser = async (req,res) => {
    try {
        const {name, email, password} = req.body;

        if(!name){
            return res.send({
                statusCode : 400, // Bad Request Status Code
                success : false, // Failure
                message: 'Name is required',
                result : {}
            });
        }

        if(!email){
            return res.send({
                statusCode : 400, // Bad Request Status Code
                success : false, // Failure
                message: 'Email is required',
                result : {}
            });
        }

        if(!password){
            return res.send({
                statusCode : 400, // Bad Request Status Code
                success : false, // Failure
                message: 'Password is required',
                result : {}
            });
        }

        const enc_password = bcrypt.hashSync(password, 10);
        const newUser = new User({
            name,
            email,
            password : enc_password
        })

        await newUser.save();

        return res.send({
            statusCode : 201, // Created Status Code
            success : true, // Success
            message: 'User created successfully',
            result: newUser
        })

    } catch (error) {
        return res.send({
            statusCode : 500, // Server Error Status Code
            success : false, // Failure
            message: 'Error creating user',
            result : error
        })
    }
}