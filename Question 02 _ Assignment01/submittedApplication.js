// Retrieve all applications from localStorage
const applications = JSON.parse(localStorage.getItem('applications')) || [];

// Function to display application data
function displayApplicationData(application, index) {
    const container = document.querySelector('.application-container');
    
    const section = document.createElement('div');
    section.classList.add('application'); // Add a class for spacing between applications
    
    const sectionTitle = document.createElement('h3');
    sectionTitle.innerText = `Application #${index + 1}`;
    section.appendChild(sectionTitle);

    const personalInfoTable = `
        <h4>Personal Information</h4>
        <table class="table">
            <tbody>
                <tr><td>Full Name</td><td>${application.fullName}</td></tr>
                <tr><td>Phone Number</td><td>${application.phone}</td></tr>
                <tr><td>Email Address</td><td>${application.email}</td></tr>
                <tr><td>Address</td><td>${application.address}, ${application.city}, ${application.state}, ${application.zip}</td></tr>
            </tbody>
        </table>`;

    const resumeTable = `
        <h4>Resume and Cover Letter</h4>
        <table class="table">
            <tbody>
                <tr><td>Resume</td><td>${application.resume}</td></tr>
                <tr><td>Cover Letter</td><td>${application.coverLetter}</td></tr>
            </tbody>
        </table>`;

    const educationTable = `
        <h4>Education</h4>
        <table class="table">
            <tbody>
                <tr><td>Highest Level of Education Attained</td><td>${application.educationLevel}</td></tr>
                <tr><td>Name of School/University</td><td>${application.schoolName}</td></tr>
                <tr><td>Major/Area of Study</td><td>${application.major}</td></tr>
                <tr><td>Graduation Year</td><td>${application.graduationYear}</td></tr>
            </tbody>
        </table>`;

    const employmentTable = `
        <h4>Employment History</h4>
        <table class="table">
            <tbody>
                <tr><td>Previous Job Title</td><td>${application.jobTitle}</td></tr>
                <tr><td>Company Name</td><td>${application.companyName}</td></tr>
                <tr><td>Employment Dates</td><td>${application.employmentDates}</td></tr>
                <tr><td>Job Responsibilities</td><td>${application.jobResponsibilities}</td></tr>
            </tbody>
        </table>`;

    const skillsTable = `
        <h4>Skills</h4>
        <table class="table">
            <tbody>
                <tr><td>Relevant Skills</td><td>${application.skills}</td></tr>
            </tbody>
        </table>`;

    const availabilityTable = `
        <h4>Availability</h4>
        <table class="table">
            <tbody>
                <tr><td>Start Date</td><td>${application.startDate}</td></tr>
                <tr><td>Willingness to Relocate</td><td>${application.relocate}</td></tr>
                <tr><td>Preferred Work Schedule</td><td>${application.workSchedule}</td></tr>
            </tbody>
        </table>`;

    const referencesTable = `
        <h4>References</h4>
        <table class="table">
            <tbody>
                <tr><td>Reference Name</td><td>${application.referenceName}</td></tr>
                <tr><td>Reference Contact Information</td><td>${application.referenceContact}</td></tr>
                <tr><td>Relationship to Applicant</td><td>${application.referenceRelationship}</td></tr>
            </tbody>
        </table>`;

    const additionalQuestionsTable = `
        <h4>Additional Questions</h4>
        <table class="table">
            <tbody>
                <tr><td>Why do you want to work for this company?</td><td>${application.whyCompany}</td></tr>
            </tbody>
        </table>`;

    // Append all sections to the div
    section.innerHTML += personalInfoTable + resumeTable + educationTable + employmentTable + skillsTable + availabilityTable + referencesTable + additionalQuestionsTable;
    
    // Add the section to the container
    container.appendChild(section);
}

// Display all applications
window.onload = function() {
    const container = document.querySelector('.application-container');
    if (applications.length === 0) {
        container.innerHTML += '<p>No applications have been submitted yet.</p>';
    } else {
        applications.forEach((application, index) => {
            displayApplicationData(application, index);
        });
    }
};

// Button to start a new application
document.getElementById('newApplicationButton').onclick = function() {
    window.location.href = 'NewApplication.html'; 
};
