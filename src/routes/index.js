const express = require('express');
const routerTask = require('./task.router');
const router = express.Router();

// colocar las rutas aquí

router.use("/tasks", routerTask)

module.exports = router;