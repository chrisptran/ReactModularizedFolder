const users = require("../models/user.models")

module.exports = {

    apiTest : (req, res) => {
        res.json({message: "Hello World"})
    },

    getAll : (req, res) => {
        res.json(users)
    },

    getOne : (req, res) => {
        const idx = req.params.idx
        res.json(users[idx])
    },

    createUser : (req, res) => {
        const newUser = req.body
        users.push(newUser)
        res.json(newUser)
    },

    updateUser : (req, res) => {
            //get params from req
    const idx = req.params.idx
    //get req.body
    const updatedUser = req.body
    users[idx] = updatedUser
    res.json(users[idx])
    },

    deleteUser : (req, res) => {
        const idx = req.params.idx
        users.splice(idx, 1)
        res.json({status: "ok"})
    }
}