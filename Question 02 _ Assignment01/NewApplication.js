// Handle form submission and store application data in localStorage
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate Full Name
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === "") {
        alert("Please enter your full name.");
        return;
    }

    // Validate Phone Number (should be exactly 11 digits)
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{11}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 11-digit phone number.");
        return;
    }

    // Validate Email Address
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate ZIP Code (ensure it’s numeric and has 5 digits)
    const zip = document.getElementById('zip').value;
    const zipPattern = /^[0-9]{5}$/;
    if (!zipPattern.test(zip)) {
        alert("Please enter a valid 5-digit ZIP code.");
        return;
    }

    // Validate Resume Upload (should be a PDF)
    const resume = document.getElementById('resume').files[0];
    if (!resume || resume.type !== "application/pdf") {
        alert("Please upload your resume as a PDF file.");
        return;
    }

    // Validate Graduation Year (between 2000 and 2100)
    const graduationYear = document.getElementById('graduationYear').value;
    if (graduationYear < 2000 || graduationYear > 2100) {
        alert("Please enter a graduation year between 2000 and 2100.");
        return;
    }

    // Allow to select start date after today only
    const today = new Date().toISOString().split('T')[0];  
    document.getElementById('startDate').setAttribute('min', today);

    // Validate Terms Checkbox
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        alert("You must agree to the terms and conditions.");
        return;
    }

    // If all validations pass, allow form submission
    alert("Application Submitted!");
    this.submit();  // Proceed with form submission
    

    // Collecting form data
    const application = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip').value,
        resume: document.getElementById('resume').files[0]?.name || 'Not provided',
        coverLetter: document.getElementById('coverLetter').value,
        educationLevel: document.getElementById('educationLevel').value,
        schoolName: document.getElementById('schoolName').value,
        major: document.getElementById('major').value,
        graduationYear: document.getElementById('graduationYear').value,
        jobTitle: document.getElementById('jobTitle').value,
        companyName: document.getElementById('companyName').value,
        employmentDates: document.getElementById('employmentDates').value,
        jobResponsibilities: document.getElementById('jobResponsibilities').value,
        skills: document.getElementById('skills').value,
        startDate: document.getElementById('startDate').value,
        relocate: document.getElementById('relocate').value,
        workSchedule: document.getElementById('workSchedule').value,
        referenceName: document.getElementById('referenceName').value,
        referenceContact: document.getElementById('referenceContact').value,
        referenceRelationship: document.getElementById('referenceRelationship').value,
        whyCompany: document.getElementById('whyCompany').value
    };

    // Retrieve previous applications, if any
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    
    // Add new application to the array
    applications.push(application);

    // Save updated array back to localStorage
    localStorage.setItem('applications', JSON.stringify(applications));

});

// Button to view submitted applications
document.getElementById('viewApplicationsButton').onclick = function() {
    window.location.href = 'submittedApplication.html';
};
