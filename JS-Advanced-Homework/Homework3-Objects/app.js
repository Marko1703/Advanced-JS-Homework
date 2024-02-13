console.log("It's working!");

class Academy {
    constructor(name, students, subjects, startDate, endDate) {
        this.name = name;
        this.students = students;
        this.subjects = subjects;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    get numberOfClasses() {
        return this.subjects.length * 10;
    }

    printStudents() {
        console.log("Students:");
        this.students.forEach(student => console.log(student));
    }

    printSubjects() {
        console.log("Subjects:");
        this.subjects.forEach(subject => console.log(subject));
    }

    startAcademy(student) {
        student.academy = this;
        this.students.push(student);
    }
};

const academy = new Academy("Seavus", ["Viktor", "Marta", "Bob", "John"], ["Basic HTML", "CSS", "Basic JS"], new Date(2024, 2, 1), new Date(2025, 2, 1));

console.log(academy);

class Subject {
    constructor(title, numberOfClasses, isElective, academy, students) {
        this.title = title;
        this.numberOfClasses = 10;
        this.isElective = isElective;
        this.academy = academy;
        this.students = [];
    }

    overrideClasses(num) {
        if (num >= 3) {
            this.numberOfClasses = num;
        } else {
            console.log("Number of classes cannot be smaller than 3.")
        }
    }
};

const subject = new Subject("Adv JS", false, academy);
subject.overrideClasses(15);

console.log(subject);

class Student {
    constructor(firstName, lastName, age, completedSubjects, academy, currentSubject) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.completedSubjects = [];
        this.academy = null;
        this.currentSubject = null;
    }

    startAcademy(academy) {
        this.academy = academy;
        academy.students.push(this);
    }

    startSubject() {
        if (this.academy === null || !this.academy.subjects.includes(subject)) {
            console.log("Error: Student has no academy or subject does not exist in the academy.");
        } else {
            if (this.currentSubject !== null) {
                this.completedSubjects.push(this.currentSubject);
            }

            subject.students.push(this);
            this.currentSubject = subject;
        }
    }
};

const student = new Student("John", "Doe", 23);
student.startAcademy(academy);
student.startSubject(subject);

console.log(student);
