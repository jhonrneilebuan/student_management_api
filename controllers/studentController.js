const Student = require('../models/studentModel');

// Create a new student
const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a student by ID
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send({ message: 'Student not found' });
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a student
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!student) return res.status(404).send({ message: 'Student not found' });
    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a student
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).send({ message: 'Student not found' });
    res.send({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
};