// StatisticsBlock.js

import React from 'react';
import './StatisticsBlock.css';

function StatisticsBlock({ students }) {
  // Calculate statistics
  const totalStudents = students.length;
  const passedStudents = students.filter(student => student.status === 'passed').length;
  const failedStudents = students.filter(student => student.status === 'failed').length;
  const averageGrade = students.reduce((total, student) => total + student.finalGrade, 0) / totalStudents;
  const maxGrade = Math.max(...students.map(student => student.finalGrade));
  const minGrade = Math.min(...students.map(student => student.finalGrade));

  return (
    <div className="statistics-block">
      <h2>Statistics</h2>
      <p>Total Students: {totalStudents}</p>
      <p>Passed Students: {passedStudents}</p>
      <p>Failed Students: {failedStudents}</p>
      <p>Average Grade: {averageGrade.toFixed(2)}</p>
      <p>Max Grade: {maxGrade}</p>
      <p>Min Grade: {minGrade}</p>
    </div>
  );
}

export default StatisticsBlock;
