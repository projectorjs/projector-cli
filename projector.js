exports.SUCCESS = async (opts = {}) => {
  return { opts };
};

exports.FAILURE = async (opts = {}) => {
  throw new Error('Oops');
};

exports.UNSERIALIZABLE = async (opts = {}) => {
  let obj = {};
  obj.obj = obj;
  return obj;
};
