document.addEventListener('DOMContentLoaded', function () {
    const teachers = {
        "Mr. Johnson": {
            subject: "Science",
            experience: "10 years",
            email: "johnson@school.com",
            bio: "Mr. Johnson is a passionate Science teacher who has been teaching for over a decade. He specializes in Physics and Chemistry."
        },
        "Mrs. Smith": {
            subject: "Maths",
            experience: "8 years",
            email: "smith@school.com",
            bio: "Mrs. Smith has a deep love for Mathematics and has been helping students excel in the subject for 8 years."
        },
        "Ms. Brown": {
            subject: "Arts",
            experience: "5 years",
            email: "brown@school.com",
            bio: "Ms. Brown is an experienced Art teacher, focusing on creative expression and visual arts."
        },
        "Mr. Davis": {
            subject: "Social Studies",
            experience: "12 years",
            email: "davis@school.com",
            bio: "Mr. Davis has been a Social Studies teacher for 12 years, sharing his knowledge of history and society with students."
        },
        "Mrs. Gupta": {
            subject: "Hindi",
            experience: "15 years",
            email: "gupta@school.com",
            bio: "Mrs. Gupta has a passion for teaching Hindi and has been dedicated to nurturing students' language skills for 15 years."
        },
        "Ms. Wilson": {
            subject: "English",
            experience: "7 years",
            email: "wilson@school.com",
            bio: "Ms. Wilson enjoys helping students improve their English language skills and has been doing so for 7 years."
        },
        "Mr. Thompson": {
            subject: "Sports",
            experience: "6 years",
            email: "thompson@school.com",
            bio: "Mr. Thompson is a sports enthusiast who encourages students to stay active and fit through various sports activities."
        },
        "Various Teachers": {
            subject: "Project",
            experience: "Varies",
            email: "info@school.com",
            bio: "Various teachers collaborate to guide students in project-based learning, covering multiple subjects."
        }
    };

    // Get the teacher's name from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const teacherName = urlParams.get('teacher');

    // Display the teacher's information
    if (teacherName && teachers[teacherName]) {
        document.getElementById('teacher-name').innerText = teacherName;
        document.getElementById('teacher-subject').innerHTML = `<strong>Subject:</strong> ${teachers[teacherName].subject}`;
        document.getElementById('teacher-experience').innerHTML = `<strong>Experience:</strong> ${teachers[teacherName].experience}`;
        document.getElementById('teacher-email').innerHTML = `<strong>Email:</strong> <a href="mailto:${teachers[teacherName].email}">${teachers[teacherName].email}</a>`;
        document.getElementById('teacher-bio').innerHTML = `<strong>Bio:</strong> ${teachers[teacherName].bio}`;
    } else {
        document.getElementById('teacher-info').innerHTML = "<p>Teacher information not found.</p>";
    }
});
