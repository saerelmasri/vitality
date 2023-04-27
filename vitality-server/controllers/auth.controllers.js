const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const register = async (req, res) => {
    const { nickname, full_name, email, password } = req.body;
    const level = 0;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!emailRegex.test(email)){
        return res.status(400).json({
            status: 400,
            message: 'Please enter a valid email'
        });
    }
    if(!passwordRegex.test(password)){
        return res.status(400).json({
            status: 400,
            message: 'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character'
        });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const check_query = 'SELECT * FROM users WHERE email = ?';
    sql.query(check_query, email, (err, result) => {
        if(err) {
            return res.status(500).json({
                status: 500, 
                message: err
            });
        }
        if(result.length > 0){
            return res.status(400).json({
                status: 400,
                message: 'Email already taken'
            });
        }
        const newUser = { nickname, full_name, email, password: hashPassword, level};
        const insert_query = 'INSERT INTO users SET ?';
        sql.query(insert_query, newUser, (err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500, 
                    message: err
                });
            }
            const token = jwt.sign({ userId: result.insertId }, process.env.JWT_TOKEN );
            return res.status(200).json({
                status: 200,
                message: 'User Successfully Created',
                token: token
            })
        })
    })
}

const login = (req, res) => {
    const { email, password } = req.body;
    const checkUser = 'SELECT * FROM users WHERE email = ?';
    sql.query(checkUser, [email], (err, result) => {
        if(err){
            return res.status(500).json({
                status: 500,
                message: err
            });
        }
        if(result.length == 0){
            return res.status(401).json({
                status: 401,
                message: 'Invalid email or password'
            })
        }
        const user = result[0];
        bcrypt.compare(password, user.password, (err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                });
            }
            if(!result){
                return res.status(401).json({
                    status: 401,
                    message: 'Invalid email or password'
                })
            }
            const token = jwt.sign({ userId: user.id }, process.env.JWT_TOKEN, { expiresIn: '1h' });
            return res.status(200).json({
                status: 200,
                message: 'Log in successfully',
                token: token
             });
        })
    })
}

const getUserbyToken = (req, res) => {
    const token = req.header('Authorization');
    if(!token){
        return res.status(400).json({
            status:400,
            message: 'Unauthorized'
        });
    }
    try{
        const decode = jwt.verify(token, process.env.JWT_TOKEN);
        return res.status(201).json({
            status: 201,
            message: 'Success',
            response: decode
        })

    }catch(err){
        res.status(500).json({
            message: 'Server Error'
        });
    }
}

const getUserInfo = async(req, res) => {
    const token = req.header('Authorization');
    if(!token){
        return res.status(400).json({
            status:400,
            message: 'Unauthorized'
        });
    }
    try{
        const decode = jwt.verify(token, process.env.JWT_TOKEN);
        const user_id = decode.userId
        const fetch = 'SELECT * FROM users WHERE id = ?'
        await sql.query(fetch,user_id, (err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                });
            }
            if(!result){
                return res.status(401).json({
                    status: 401,
                    message: 'Invalid id'
                })
            }

            return res.status(201).json({
                status: 201,
                message: 'Success',
                response: result
            })

        } )
        
        

    }catch(err){
        res.status(500).json({
            message: 'Server Error'
        });
    }
}

const removeUser = async(req, res) => {
    const token = req.header('Authorization');
    if(!token){
        return res.status(400).json({
            status:400,
            message: 'Unauthorized'
        });
    }
    try{
        const decode = jwt.verify(token, process.env.JWT_TOKEN);
        const user_id = decode.userId
        const fetch = 'DELETE * FROM users WHERE id = ?'
        await sql.query(fetch,user_id, (err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                });
            }
            if(!result){
                return res.status(401).json({
                    status: 401,
                    message: 'Invalid id'
                })
            }

            return res.status(201).json({
                status: 201,
                message: 'Success',
            })
        } )
    }catch(err){
        res.status(500).json({
            message: 'Server Error'
        });
    }
}

module.exports = { register, login, getUserbyToken, getUserInfo, removeUser }

