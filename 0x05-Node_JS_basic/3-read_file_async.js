const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Onwuli David <https://github.com/cazicruz>
 */

function countStudents(path){
    const students = {}
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
            }
            if (data) {
                const lines = data.split('\n');
                let students_data = [];
                let fields = [];
                let study = [];
                const students = {};
                fields = lines[0].split(',');

                for (const line of lines.slice(1)){
                    students_data.push(line.split(','));
                };
                //console.log(students_data)
                //console.log(fields)

                // converted the .cvs file into a list of objects with index
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
                //console.log(students)
                NUMBER_OF_STUDENTS = Object.keys(students).length
                console.log(`Number of students: ${NUMBER_OF_STUDENTS}`)
                //console.log(students_data)
                for (const course in study){
                        if (course){
                            console.log(`Number of students in ${course}: ${study[course].length}. List: ${study[course].join(', ')}`)
                        }
                }
            }
            resolve(students);
        });
        });

};

module.exports = countStudents;