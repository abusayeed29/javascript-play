const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// intance method
todoSchema.methods = {
  findActive: function () {
    return mongoose.model("Todo").find({ status: "inactive" });
  },
  findActiveCallback: function (cb) {
    return mongoose.model("Todo").find({ status: "active" }, cb);
  },
};
// static methods

todoSchema.statics ={
  findByJS: function(){
    return this.find({title:/js/i});
  },
}

// static method

module.exports = todoSchema;
