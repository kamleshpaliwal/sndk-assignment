const db = require('../models')
const Post = db.post

exports.create = async postBody => {
  try {
    const result = await Post.create(postBody)
    return result
  } catch (err) {
    throw 'ERR_CREATING_POST'
  }
}

exports.findAll = async () => {
  try {
    const result = await Post.findAll()
    return result
  } catch (err) {
    throw 'ERR_FETCHING_POSTS'
  }
}

exports.findOne = async postId => {
  try {
    const result = await Post.findByPk(postId)
    return result
  } catch (err) {
    throw 'ERR_FETCHING_POST'
  }
}

exports.updatePost = async (postId, postBody) => {
  try {
    const result = await Post.update(postBody, {
      where: { id: postId }
    })
    return result
  } catch (err) {
    console.log('errr', err)
    throw 'ERR_FETCHING_POST'
  }
}

exports.deletePost = async postId => {
  try {
    const result = await Post.destroy({
      where: { id: postId }
    })
    return result
  } catch (err) {
    throw 'ERR_DELETING_POST'
  }
}
