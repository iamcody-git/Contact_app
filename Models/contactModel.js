import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    userId:{
      type:mongoose.Types.ObjectId,
      required:true,
      ref:'User'

    },
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact email address"],
    },
    phone: {
      type: String,
      required: [true, "Please add the contact phone number"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Contact = mongoose.model("Contact", contactSchema);
