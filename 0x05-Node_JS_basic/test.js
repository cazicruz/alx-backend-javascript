const fs = require('fs');

function countStudents(path) {
  let students_data = [];
  let fields = [];
  const students = {};

  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    console.log(lines);
    let db = {};
    fields = lines[0].split(',');

    for (const line of lines.slice(1)) {
      students_data.push(line.split(','));
    }

    for (let i = 0; i < students_data.length; i++) {
      students[i] = []; // Initialize an array for each student

      for (let j = 0; j < fields.length; j++) {
        const student = {};
        student[fields[j]] = students_data[i][j];
        students[i].push(student);
      }
    }
    
    console.log(students);
    
  } catch (err) {
    console.error(err);
  }
}

// Example usage:
countStudents('./database.csv');
