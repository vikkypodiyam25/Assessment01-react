import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";
import "./App.css";

import students from "./data/students";

function App() {
  const totalStudents = students.length;
  const averageMarks = students.reduce((total, student) => {
      return total + student.marks;}, 0) / totalStudents;

  const topStudents = students.filter((student) => student.marks > 70);
  return (
    <div className="app">

      <Navbar />
      <h1>Student Information Dashboard</h1>
      <div className="navbar">

        <div>
          <h3>Total Students</h3>
          <h2>{totalStudents}</h2>
        </div>

        <div>
          <h3>Average Marks</h3>
          <h2>{averageMarks}</h2>
        </div>

        <div>
          <h3>Above 70 Marks</h3>
          <h2>{topStudents.length}</h2>
        </div>

      </div>

      <h2>All Students</h2>
      <StudentList students={students} />
      <h2>Top Performing Students</h2>

      <div className="studentlist">
        {topStudents.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}
      </div>

      <Footer />


    </div>
  );
  
}

export default App;
