const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categoriesController')

router.get('/categories', categoriesController.index)

router.post('/categories', categoriesController.store)

router.get('/categories/:id', categoriesController.show)

router.put('/categories/:id', categoriesController.update)

router.delete('/categories/:id', categoriesController.delete)

module.exports = router
