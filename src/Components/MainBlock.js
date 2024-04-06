// MainBlock.js

import React, { useState } from 'react';
import StudentTable from './Table';
import StatisticsBlock from './Statistics'; // Import StatisticsBlock component
import DetailsBlock from './DetailsBlock'; // optional
import './MainBlock.css';

function MainBlock() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showStatistics, setShowStatistics] = useState(false); // State for showing statistics

  // State for sorting options
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order

  // State for filtering options
  const [filterValue, setFilterValue] = useState('');

  // Function to handle sorting
  const handleSort = () => {
    // Toggle sorting order between 'asc' and 'desc'
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Function to handle filtering
  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  // Function to toggle display of statistics
  const handleToggleStatistics = () => {
    setShowStatistics(!showStatistics);
  };

  return (
    <div className="main-block">
      {/* Options block */}
      <div className="options">
        {/* Sorting option */}
        <button onClick={handleSort}>
          Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
        </button>
        
        {/* Filtering option */}
        <input
          type="text"
          placeholder="Filter by name..."
          value={filterValue}
          onChange={handleFilterChange}
        />
        
        {/* Button to toggle display of statistics */}
        <button onClick={handleToggleStatistics}>
          {showStatistics ? 'Hide Statistics' : 'Show Statistics'}
        </button>
      </div>

      {/* Student table */}
      <StudentTable
        setSelectedStudent={setSelectedStudent}
        sortOrder={sortOrder}
        filterValue={filterValue}
      />

      {/* Details block (optional) */}
      {selectedStudent && <DetailsBlock student={selectedStudent} />}

      {/* Statistics block */}
      {showStatistics && <StatisticsBlock />}
    </div>
  );
}

export default MainBlock;
