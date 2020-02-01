const postService = require('../services/post.service');
const apiHandler = require('../heplers/apihandler');
const { check: body, validationResult } = require('express-validator');

// Create and Save a new Post
exports.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const post = await postService.create(req.body);
    if (post) {
      apiHandler.setSuccessResponse(post, 'Post created succesffully.', res);
    }
  } catch (err) {
    apiHandler.setErrorResponse(
      { code: 500, message: 'Some error occurred while creating the Post.' },
      res
    );
  }
};

// Retrieve all Posts from the database.
exports.findAll = async (req, res) => {
  try {
    const posts = await postService.findAll();
    if (posts.length) {
      apiHandler.setSuccessResponse(posts, 'Post fetched succesffully.', res);
      return;
    }
    apiHandler.setSuccessResponse(posts, 'No posts found.', res);
  } catch (err) {
    apiHandler.setErrorResponse(
      { code: 500, message: 'Some error occurred while fetching posts.' },
      res
    );
  }
};

// Find a single Post with an id
exports.findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postService.findOne(id);
    if (post) {
      apiHandler.setSuccessResponse(post, 'Post fetched successfully', res);
      return;
    }
    apiHandler.setErrorResponse(
      {
        code: 400,
        message: `No posts found with post id: ${id}.`
      },
      res
    );
  } catch (err) {
    apiHandler.setErrorResponse(
      {
        code: 500,
        message: `Some error occurred while fetching post with post id: ${id}.`
      },
      res
    );
  }
};

// Update a Tutorial by the id in the request
exports.updatePost = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await postService.updatePost(id, req.body);
    if (result[0] > 0) {
      apiHandler.setSuccessResponse(
        {},
        `Post with id=${id} updated successfully.`,
        res
      );
      return;
    }
    apiHandler.setErrorResponse(
      {
        code: 400,
        message: `Cannot update Post with id=${id}. Maybe Post was not found or req.body is empty!`
      },
      res
    );
  } catch (err) {
    apiHandler.setErrorResponse(
      {
        code: 500,
        message: `Some error occurred while updating post with post ${id}.`
      },
      res
    );
  }
};

// Delete a Post with the specified id in the request
exports.deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await postService.deletePost(id);
    if (result > 0) {
      apiHandler.setSuccessResponse(
        {},
        `Post with id=${id} deleted successfully.`,
        res
      );
      return;
    }
    apiHandler.setErrorResponse(
      {
        code: 500,
        message: `Cannot delete Post with id=${id}. Maybe Post was not found or req.body is empty!`
      },
      res
    );
  } catch (err) {
    apiHandler.setErrorResponse(
      {
        code: 500,
        message: `Some error occurred while deleting post with post ${id}.`
      },
      res
    );
  }
};
