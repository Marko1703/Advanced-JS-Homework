console.log("It's working");

const studentsUrl = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

const fetchStudentsAsync = async () => {
    try {
        const res = await fetch(studentsUrl);
        const data = await res.json();
        console.log(data);

        const averageAge = data.reduce((acc, student) => acc + student.age, 0) / data.length;
        const averageGrade = data.reduce((acc, student) => acc + student.averageGrade, 0) / data.length
        console.log('Average Age:', averageAge);
        console.log('Average Grade:', averageGrade);

        const studentOver60 = data.filter(student => student.age > 60).length;
        const studentUnder30 = data.filter(student => student.age < 30).length;
        console.log("Student over age of 60:", studentOver60);
        console.log("Student under age of 30:", studentUnder30);

        const studentList = data.filter(student => student.age > 30 && student.averageGrade >= 4)
        .map(student => `${student.firstName} ${student.lastName} - ${student.city}`);
        console.log("Student List:", studentList);

        const arthurCadore = data.find(student => student.firstName === "Arthur" && student.lastName === "Cadore");
        console.log("Find student:", arthurCadore);

        const oldestStudent = data.reduce((oldest, student) => student.age > oldest.age ? student : oldest, data[0]);
        const youngestStudent = data.reduce((youngest, student) => student.age < youngest.age ? student : youngest, data[0]);
        console.log("Oldest student:", oldestStudent);
        console.log("Youngest student:", youngestStudent);

        const studentFullNames = data.filter(student => student.lastName.length > 8)
        .map(student => `${student.firstName} ${student.lastName}`);
        console.log("Student full names:", studentFullNames);

        const topStudents = data.sort((a, b) => b.averageGrade - a.averageGrade)
        .slice(0, 10)
        .map(student => `${student.firstName} ${student.lastName} - ${student.averageGrade}`);
        console.log("Top 10 students:", topStudents);

        const gradeOneStudents = data.filter(student => student.averageGrade === 1);
        const adultStudents = data.filter(student => student.age > 18);
        console.log("Students withs average grade one:", gradeOneStudents);
        console.log("Adult students:", adultStudents);

        const studentsDiv = document.querySelector(".students");
        studentsDiv.innerHTML = `
        <p>Average Age: ${averageAge}</p>
        <p>Average Grade: ${averageGrade}</p>
        <p>Students over age of 60: ${studentOver60}</p>
        <p>Students under age of 30: ${studentUnder30}</p>
        <p>Students List: ${studentList.join(', ')}</p>
        <p>Find Student: ${JSON.stringify(arthurCadore)}</p>
        <p>Oldest Student: ${JSON.stringify(oldestStudent)}</p>
        <p>Youngest Student: ${JSON.stringify(youngestStudent)}</p>
        <p>Long Last Names: ${studentFullNames}</p> 
        <p>Top 10 Students: ${topStudents.join(', ')}</p>
        <p>Students with average grade 1: ${JSON.stringify(gradeOneStudents)}</p>
        <p>Adult Students: ${JSON.stringify(adultStudents)}</p>
        `;

        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong in fetch users!");
    }
};

fetchStudentsAsync();