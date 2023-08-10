

const UserController = require("../controllers/user1.controllers")

module.exports = (app) => {
app.get("/api/testing", UserController.apiTest)

app.get("/api/users", UserController.getAll)

app.get("/api/users/:idx", UserController.getOne)

app.post("/api/users", UserController.createUser)

app.put("/api/users/:idx", UserController.updateUser)

app.delete("/api/users/:idx", UserController.deleteUser)

}
