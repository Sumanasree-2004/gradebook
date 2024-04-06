// StudentTable.js

import React, { useState } from 'react';
import './Table.css';

function StudentTable({ setSelectedStudent }) {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Sumana',
      ticketNumber: 'A123',
      ratingGrade: 4.5,
      examGrade: 3.8,
      finalGrade: 0.6 * 3.8 + 0.4 * 4.5,
      status: (0.6 * 3.8 + 0.4 * 4.5) > 4 ? 'passed' : 'failed',
      // Add more fields if needed
    },
    {
      id: 2,
      name: 'Ajay',
      ticketNumber: 'B456',
      ratingGrade: 4.2,
      examGrade: 4.5,
      finalGrade: 0.6 * 4.5 + 0.4 * 4.2,
      status: (0.6 * 4.5 + 0.4 * 4.2) > 4 ? 'passed' : 'failed',
      // Add more fields if needed
    },
    // Add more students as needed
  ]);

  const handleRowClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>№</th>
          <th>Name</th>
          <th>Ticket's Number</th>
          <th>Rating Grade</th>
          <th>Exam Grade</th>
          <th>Final Grade</th>
          <th>Status</th>
          {/* Add more headers if needed */}
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student.id} onClick={() => handleRowClick(student)}>
            <td>{index + 1}</td>
            <td>{student.name.toUpperCase()}</td>
            <td>{student.ticketNumber}</td>
            <td>{student.ratingGrade}</td>
            <td>{student.examGrade}</td>
            <td>{student.finalGrade}</td>
            <td>{student.status}</td>
            {/* Add more data cells if needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
