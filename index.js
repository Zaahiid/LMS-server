import express from "express";
import { configDotenv } from "dotenv";
import dbConnect from "./src/database/dbConnect.js";
import authRoutes from "./src/routes/auth/auth.routes.js";
import mediaRoutes from "./src/routes/instructor/media.routes.js";
import instructorCourseRoutes from "./src/routes/instructor/course.routes.js";
import studentViewCourseRoutes from "./src/routes/student/course.routes.js";
import studentViewOrderRoutes from "./src/routes/student/order.routes.js";
import studentCoursesRoutes from "./src/routes/student/courses-bought.routes.js";
import studentCourseProgressRoutes from "./src/routes/student/course-progress.routes.js";

configDotenv();
const PORT = process.env.PORT;
const app = express();
dbConnect();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/media", mediaRoutes);
app.use("/instructor/course", instructorCourseRoutes);
app.use("/student/course", studentViewCourseRoutes);
app.use("/student/order", studentViewOrderRoutes);
app.use("/student/courses-bought", studentCoursesRoutes);
app.use("/student/course-progress", studentCourseProgressRoutes);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
