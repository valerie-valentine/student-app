import React from 'react';
import './StudentList.css';
import Student from './Student';
import PropTypes from 'prop-types';



const StudentList = ({ studentData }) => {
  const componentClass = 'student-list'
  const studentComponents = studentData.map((student) => {
    return (
        <li key={student.emailData}>
            <Student name={ student.nameData } email={student.emailData} />
        </li>
    );
  });
  return (
    <section>
      <h2 className="student-list_header yellow-big">Student List</h2>
      <ul className={componentClass}>
       {studentComponents}
      </ul>
    </section>
  );
};

StudentList.propTypes = {
  studentData: PropTypes.arrayOf(PropTypes.shape({
    nameData: PropTypes.string.isRequired,
    emailData: PropTypes.string.isRequired,
  })).isRequired,
}

export default StudentList;
