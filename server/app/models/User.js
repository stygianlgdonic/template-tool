// npm packages
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
// app imports
const { APIError } = require("../helpers");

// globals
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: String,
    lastName: String,
    emailAccounts: [String],
    status: String,
    emailVerified: Boolean,
    jobRole: String,
    purposeOfUse: String,
    companyName: String,
    companyLogo: String,
    scheduleList: [String],
    workspaceList: [String],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

userSchema.pre("save", async function (next) {
  const user = this;
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

userSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

userSchema.statics = {
  /**
   * Create a Single New User
   * @param {object} newUser - an instance of User
   * @returns {Promise<User, APIError>}
   */
  async createUser(newUser) {
    // const duplicate = await this.findOne({ id: newUser.id });
    // if (duplicate) {
    //   throw new APIError(
    //     409,
    //     "User Already Exists",
    //     `There is already a User with name '${newUser.id}'.`
    //   );
    // }
    try {
      const user = await newUser.save();
      return user.toObject();
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  /**
   * Delete a single User
   * @param {String} name - the User's name
   * @returns {Promise<User, APIError>}
   */
  async deleteUser(id) {
    const deleted = await this.findOneAndRemove({ _id: id });
    if (!deleted) {
      throw new APIError(404, "User Not Found", `No User '${name}' found.`);
    }
    return deleted.toObject();
  },
  /**
   * Get a single User by id
   * @param {String} id - the user's id
   * @returns {Promise<User, APIError>}
   */
  async readUser(id) {
    const user = await this.findOne({ _id: id });

    if (!user) {
      throw new APIError(404, "User Not Found", `No User '${id}' found.`);
    }
    return user.toObject();
  },
  /**
   * Get a list of Users
   * @param {Object} query - pre-formatted query to retrieve Users.
   * @param {Object} fields - a list of fields to select or not in object form
   * @param {String} skip - number of docs to skip (for pagination)
   * @param {String} limit - number of docs to limit by (for pagination)
   * @returns {Promise<Users, APIError>}
   */
  async readUsers(query, fields, skip, limit) {
    const users = await this.find(query, fields)
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 })
      .exec();
    if (!users.length) {
      return [];
    }
    //Since Documents donot contain Doc ID by Default, Adding it manually
    const usersWithId = users.map((user) => {
      const convertedToObject = user.toObject();
      return { ...convertedToObject, id: user._id };
    });
    return usersWithId;
  },
  /**
   * Patch/Update a single user
   * @param {String} id - the User's id
   * @param {Object} userUpdate - the json containing the user attributes
   * @returns {Promise<User, APIError>}
   */
  async updateUser(id, userUpdate) {
    const user = await this.findOneAndUpdate({ _id: id }, userUpdate, {
      new: true,
    });
    if (!user) {
      throw new APIError(404, "user Not Found", `No user '${id}' found.`);
    }
    return user.toObject();
  },
};

/* Transform with .toObject to remove __v and _id from response */
if (!userSchema.options.toObject) userSchema.options.toObject = {};
userSchema.options.toObject.transform = (doc, ret) => {
  const transformed = ret;
  delete transformed._id;
  delete transformed.__v;
  return transformed;
};

/** Ensure MongoDB Indices **/
userSchema.index({ name: 1, number: 1 }, { unique: true }); // example compound idx

module.exports = mongoose.model("User", userSchema);
