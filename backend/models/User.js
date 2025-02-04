const mongoose = require("mongoose");

const UG_COURSES = [
  "Bachelor of Public Health (BPH)",
  "BSc in Environment & Sustainability (Bsc-ES)"
];

const PG_COURSES = [
  "Master of Public Health",
  "Master of Public Policy (MPP)"
];

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, "Phone number must be exactly 10 digits"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  level: {
    type: String,
    required: true,
    enum: ["undergraduate", "postgraduate"],
  },
  programs: {
    type: String,
    required: true,
    enum: [...UG_COURSES, ...PG_COURSES],
  },
  state: {
    type: String,
    required: true,
    enum: ["mh", "up"], // Fix: Use enum instead of required array
  },
  city: {
    type: String,
    required: true,
    enum: ["pune", "mumbai"], // Fix: Use enum instead of required array
  }
});

// Pre-validation hook to check if programs match the level
userSchema.pre("validate", function (next) {
  if (
    (this.level === "undergraduate" && !UG_COURSES.includes(this.programs)) ||
    (this.level === "postgraduate" && !PG_COURSES.includes(this.programs))
  ) {
    return next(new Error("Invalid program selected for the chosen level."));
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
