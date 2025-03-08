function updateForm() {
    const role = document.getElementById('role').value;
    const dynamicField = document.getElementById('dynamicField');

    // Clear existing content
    dynamicField.innerHTML = '';

    if (role === 'teacher') {
        // Add teacher-specific code input
        dynamicField.innerHTML = `
            <input type="text" id="teacherCode" name="teacherCode" required placeholder="Teacher Code">
        `;
    } else if (role === 'student') {
        // Add password input for students
        dynamicField.innerHTML = `
            <input type="password" id="password" name="password" required placeholder="Password">
        `;
    }
}
