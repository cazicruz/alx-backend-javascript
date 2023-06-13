const fs = require('fs');

function countStudents(path){
    let students_data = []
    let fields = []
    let study = []
    const students = {}
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n');
        let db = {}
        fields = lines[0].split(',')
        for (const line of lines.slice(1)){
            students_data.push(line.split(','));
        };
        // converted the .cvs file into a list of objects
        for (i=0; i<students_data.length; i++) {
            students[i] = []
            let course = students_data[i][3]
            let firstname = students_data[i][0]
            if (course in study){
                study[course].push(firstname)
            } else {
                study[course] = [firstname]
            }
            for (j=0; j<fields.length; j++) {
                const students1 = {}
                students1[fields[j]] = students_data[i][j];
                students[i].push(students1)
            }
        }
        //console.log(study)
        NUMBER_OF_STUDENTS = Object.keys(students).length
        console.log(`Number of students: ${NUMBER_OF_STUDENTS}`)
        //console.log(students_data)
        for (const course in study){
            if (course){
                console.log(`Number of students in ${course}: ${study[course].length}. List: ${study[course].join(', ')}`)
            }
        }
        //console.log(students)
        /*let count = 0;
        const fields = {};
        const students = {};
        for (const line of lines) {
        if (line !== '') {
            const student = line.split(',');
            if (count === 0) {
            for (const field of student) {
                fields[field] = count;
                count += 1;
            }
            } else {
            const firstname = student[fields.firstname];
            if (!(student[fields.field])) {
                students[firstname] = [];
            } else if (students[firstname]) {
                students[firstname].push(student[fields.field]);
            } else {
                students[firstname] = [student[fields.field]];
            }
            }
        }
        }
        console.log(`Number of students: ${Object.keys(students).length}`);
        for (const student in students) {
        if (student) {
            console.log(`Number of students in ${student}: ${students[student].length}. List: ${students[student].join(', ')}`);
        }
        }*/
    } catch (err) {
        throw new Error('Cannot load the database');
    }
};

module.exports = countStudents;