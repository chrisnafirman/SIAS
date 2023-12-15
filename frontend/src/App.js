import React from "react";
import { Routes, Route } from "react-router-dom";



import Home from "./components/Home.jsx"
import ClassA from"./components/Student/Classroom.jsx"
import Schedule from"./components/Admin/Schedule.jsx"
import Information from"./components/Admin/Information.jsx"
import Students from"./components/Admin/Students.jsx"
import InformationStudents from"./components/InformationStudents.jsx"
import InformationTeacher from"./components/InformationTeacher.jsx"
import Login from"./components/Login.jsx"
import Teacher from"./components/Admin/Teacher.jsx"
function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="ClassA" element={<ClassA/>}/>
      <Route path="schedule" element={<Schedule/>}/>
      <Route path="Information" element={<Information/>}/>
      <Route path="Students" element={<Students/>}/>
      <Route path="InformationStudents" element={<InformationStudents/>}/>
      <Route path="InformationTeacher" element={<InformationTeacher/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path="Teacher" element={<Teacher/>}/>
      </Routes>
    </>
  );
}

export default App;
