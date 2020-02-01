module.exports = app => {
  const postController = require('../controllers/post.controller.js')
  const validator = require('../heplers/validator')
  let router = require('express').Router()

  // Create a new Tutorial
  router.post('/', validator.validate('createPost'), postController.create)

  // Retrieve all Tutorials
  router.get('/', postController.findAll)

  // Retrieve a single Post with id
  router.get('/:id', postController.findOne)

  // Update a Post with id
  router.put('/:id', postController.updatePost)

  // Delete a Post with id
  router.delete('/:id', postController.deletePost)

  app.use('/api/posts', router)
}
