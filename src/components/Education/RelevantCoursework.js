import React from 'react';

const RelevantCoursework = ({ title, courses }) => {
  return (
    <div className="education-speech-bubble">
      <h3>{title}</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default RelevantCoursework;