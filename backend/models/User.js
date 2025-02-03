const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
	match: [/^\d{10}$/, "Phone number must be exactly 10 digits"], // Validation
  },
  email: {
    type: String,
    required: true,
    unique: true,
	match: [/.+@.+\..+/, "Please enter a valid email address"], // Validation
  },
  level: {
    type: String,
    required: true,
    enum: ["undergraduate", "postgraduate"],
  },
  programs: {
    type: String,
    required: true,
    maxLength: ["Bachelor of Public Health (BPH)"],
  },
  state: {
    type: String,
    required: true,
    required: ["mh", "up"],
  },
  city: {
    type: String,
    required: true,
    required: ["pune", "mumbai"],
  },
});

// Dynamically setting allowed values for the "course" field
const UG_COURSES = ["Bachelor of Public Health (BPH)", "BSc in Environment & Sustainability (Bsc-ES)"];
const PG_COURSES = ["Master of Public Health", "Master of Public Policy (MPP)"];

userSchema.pre("validate", function (next) {
  if (this.educationLevel === "undergraduate") {
    this.schema.path("course").enumValues = UG_COURSES;
  } else if (this.educationLevel === "postgraduate") {
    this.schema.path("course").enumValues = PG_COURSES;
  }

  if (!this.schema.path("course").enumValues.includes(this.course)) {
    return next(new Error("Invalid course selected."));
  }

  next();
});

module.exports = mongoose.model("User", userSchema);
