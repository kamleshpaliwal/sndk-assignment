const { check } = require('express-validator');

exports.validate = method => {
  switch (method) {
    case 'createPost': {
      return [
        check('title', `Title doesn't exists`).exists(),
        check('description', `Description doesn't exists`).exists(),
        check('categoryId', `CategoryId doesn't exists`).exists()
      ];
    }
  }
};
