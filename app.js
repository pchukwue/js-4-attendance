
// Sample student data
let students = [];

// Function to generate the student attendance table
function generateAttendanceTable() {
    let attendanceList = document.getElementById("attendance-list");
    attendanceList.innerHTML = "";

    students.forEach(student => {
        let row = document.createElement("div");
        row.className = "attendance-row";
        row.innerHTML = `
            <span>Name: ${student.name}</span>
            <span>Class: ${student.class}</span>
            <span>Seat Number: ${student.seat}</span>
            <span>Attendance: ${student.attendance}</span>
        `;

        attendanceList.appendChild(row);
    });
}

// Function to mark attendance and update the data
function markAttendance() {
    let studentName = document.getElementById("student-name").value;
    let studentClass = document.getElementById("student-class").value;
    let seatNumber = document.getElementById("seat-number").value;

    if (studentName && studentClass && seatNumber) {
        students.push({
            name: studentName,
            class: studentClass,
            seat: seatNumber,
            attendance: "Present", // Default to "Present"
        });

        // Reset input fields
        document.getElementById("student-name").value = "";
        document.getElementById("student-class").value = "";
        document.getElementById("seat-number").value = "";

        generateAttendanceTable();
    } else {
        alert("Please fill in all fields.");
    }
}

// Initialize the table
generateAttendanceTable();

// Add event listener to the "Mark Attendance" button
let markButton = document.getElementById("mark-attendance");
markButton.addEventListener("click", markAttendance);


// In this code, students' data is stored in the students array, and when you click the "Mark Attendance" button, it adds a new student's data to the array and updates the attendance list. You can further customize and enhance this basic application to meet your specific requirements, including using local storage for data persistence.




// Is this conversation helpful so far?



// Regenerate

