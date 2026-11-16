import StudentCard from "./StudentCard";

function StudentList({ students }) {
  return (
    <div className="studentlist">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
        />
      ))}
    </div>
  );
}

export default StudentList;