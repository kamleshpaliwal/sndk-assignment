module.exports = {
  setErrorResponse: (error, res) => {
    return res
      .status(error.code)
      .send({ success: false, message: error.message });
  },
  setSuccessResponse: function(data, message, res) {
    return res.status(200).send({ success: true, data, message });
  }
};
