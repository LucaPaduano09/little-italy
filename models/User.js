import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  newsletter: {
    type: Boolean,
    required: false,
  },
  orders: {
    type: Array,
    required: false,
  },
  cart: {
    type: Array,
    required: false,
  },
  active: {
    type: Boolean,
    required: false,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
