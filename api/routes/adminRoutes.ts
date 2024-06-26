import express from "express";
import * as AdminController from "./../controller/adminController";
import FeeController  from './../controller/feeController';

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Admin Related Routes Here!");
});

// Teachers Routes
router.get("/teachers", AdminController.getAllTeachers);
router.post("/teachers", AdminController.addTeacher);
router.get("/teachers/:id", AdminController.getSpecificTeacher);
router.put("/teachers/:id", AdminController.updateTeacher);
router.delete("/teachers/:id", AdminController.deleteTeacher);

// Students Routes
router.get("/students", AdminController.getAllStudents);
router.get("/students/:id", AdminController.getSpecificStudent);
router.put("/students/:id", AdminController.updateAdmissionStatus);

//get contact messages
router.get('/contact-messages', AdminController.ContactMessages);

// Fees Routes
router.get("/fees", AdminController.getFees);
router.post('/set-fees', AdminController.setFees);

// Class Routes
router.get('/classes', AdminController.getAllClasses);
router.put("/admission-seat/:id", AdminController.updateAdmissionSeats);
router.put("/set-class-teacher/:id", AdminController.setClassTeacher);

//Admission list get with the className
// router.get("/admissions/list", getAdmissionList);

//Fee Routes
router.post('/create-payment', FeeController.createPayment);
router.post('/payment-success', FeeController.handlePaymentSuccess);
router.get('/payment/:paymentId', FeeController.getPaymentDetails);

//Admission list add
// router.post("/admissions", addAdmissionSeats);

//Admission list update
// router.put("/admissions", updateAdmission);

export default router;

//api routes for defining classes with their respective class teachers
