const http = require('http');
const { url } = require('inspector');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
// countstudents function
const fs = require('fs');

function countStudents(path){
    const students = {}
    const result =[];
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
                    if (line != ""){
                        students_data.push(line.split(','));
                    }
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
                result.push(`Number of students: ${NUMBER_OF_STUDENTS}`)
                //console.log(students_data)
                for (const course in study){
                        if (course){
                            result.push(`Number of students in ${course}: ${study[course].length}. List: ${study[course].join(', ')}`)
                        }
                }
            }
            resolve(result.join('\n'));
        });
        });

};
// http Server section
app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    const url = req.url;
    
    if (url === '/') {
        res.end('Hello Holberton School!');
    }
    else if ((url === '/students') || (url === '/students/')){
        const output=['This is the list of our students\n'];
        countStudents(DB_FILE)
            .then((result) => {
                output.push(result);
                const outputtext = output.join('\n');
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write(Buffer.from(outputtext));
                res.end();
            })
            .catch((error) => {
                res.end(error.message);
            });
    }
});

const port = 1245;
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});


module.exports = app;