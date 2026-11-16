function StudentCard({ student }) {
  const { name, email, course, marks } = student;

  return (
    <div className="studentcard">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Course: {course}</p>
      <p>Marks: {marks}</p>
    </div>
  );
}

export default StudentCard;