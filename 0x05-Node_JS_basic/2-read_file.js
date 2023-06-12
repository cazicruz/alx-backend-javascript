const fs = require('fs');

export function countStudents(path){
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n');
        let count = 0;
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
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
};