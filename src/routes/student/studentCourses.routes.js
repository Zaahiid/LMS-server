import express from "express";
import { getCoursesByStudentId } from "../../controllers/student/studentCourses.controller";

const router = express.Router();

router.get("/get/:studentId", getCoursesByStudentId);

export default router;