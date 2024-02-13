console.log("It's live!");

const studentsUrl = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

fetch(studentsUrl)
  .then(res => res.json()) 
  .then(student => {
    console.log(student);
    
    // Task 1
    const filteredStudents1 = student.filter(student => student.averageGrade > 3)
    console.log("All students with an average grade higher than 3:", filteredStudents1);
    // Task 2
    const filteredStudents2 = student.filter(student => student.gender === "Female" && student.averageGrade === 5)
    .map(student => student.firstName);
    console.log("All female student names with an average grade of 5:", filteredStudents2);
    // Task 3
    const filteredStudents3 = student.filter(student => student.gender === "Male" && student.city === "Skopje" && student.age > 18)
    .map(student => `${student.firstName} ${student.lastName}`);
    console.log("All male student full names who live in Skopje and are over 18 years old:", filteredStudents3);
    // Task 4
    const filteredStudents4 = student.filter(student => student.gender === "Female" && student.age > 24)
    .map(student => `${student.averageGrade}`);
    console.log("The average grades of all female students over the age of 24:", filteredStudents4);
    // Task 5
    const filteredStudents5 = student.filter(student => student.gender === "Male" && student.firstName.startsWith("B") && student.averageGrade > 2)
    console.log("All male students with a name starting with B and average grade over 2:", filteredStudents5);
  })
   // Catch any errors that may occur during the fetch or data processing
  .catch(error => console.error('Error fetching data:', error));