import React from 'react';
import './StudentList.css';
import Student from './Student';


const studentData = [
    {
        nameData: 'Ada',
        emailData: 'ada@dev.org'
    },
    {
        nameData: 'Soo-ah',
        emailData: 'sooah@dev.org'
    },
    {
        nameData: 'Chrissy',
        emailData: 'chrissy@dev.org'
    }
]



const StudentList = () => {
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

export default StudentList;
