module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define('post', {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.ENUM,
      values: ['drapft', 'published']
    }
  })

  return Post
}
