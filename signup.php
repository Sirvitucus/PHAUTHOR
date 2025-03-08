<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users_db";

// Start output buffering to prevent header issues
ob_start();

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if required fields are set
if (!isset($_POST['username'], $_POST['role'])) {
    die("Error: Missing required fields.");
}

$username = $_POST['username'];
$role = $_POST['role'];
$password = isset($_POST['password']) ? password_hash($_POST['password'], PASSWORD_DEFAULT) : NULL;
$teacherCode = $_POST['teacherCode'] ?? NULL;

// Validate input based on role
if ($role === 'student' && !$password) {
    die("Error: Student must provide a password.");
} elseif ($role === 'teacher' && !$teacherCode) {
    die("Error: Teacher must provide a teacher code.");
}

// Insert into database
$stmt = $conn->prepare("INSERT INTO users (username, role, password, teacher_code) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $username, $role, $password, $teacherCode);

if ($stmt->execute()) {
    // Redirect only if signup is successful
    header("Location: login.html");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

// Close resources
$stmt->close();
$conn->close();

// End output buffering
ob_end_flush();
?>
