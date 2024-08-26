const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  course: { type: String, required: true },
  year: { type: String, enum: [
    "First Year",
    "Second Year",
    "Third Year",
    "Fourth Year",
    "Fifth Year",
  ],
    required: true },
  enrolled: { type: Boolean, required: true }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
