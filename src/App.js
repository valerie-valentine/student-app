import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

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
  },
  {
    nameData: 'Charles',
    emailData: 'charles@incharge.com',
  },
];

const App = () => {

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}/>
      <StudentList studentData={studentData}/>
    </main>
  );
}

export default App;
