import asyncHandler from "express-async-handler";
import { Contact } from "../Models/contactModel.js";

export const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

export const getContactWithId = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json(contact);
});

export const postContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ msg: "All fields are mandatory" });
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

export const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const { _id, ...updateData } = req.body; // Exclude _id if present
  const updatedContact = await Contact.findOneAndUpdate(
    { _id: req.params.id }, // Correct filter object
    updateData,             // Update data
    { new: true }           // Return the updated document
  );

  res.status(200).json(updatedContact);
});

export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  await Contact.deleteOne({ _id: req.params.id });

  res.status(200).json(contact);
});
