// SELECT THE REGISTRATION FORM
const memberForm = document.getElementById("memberForm");

// SELECT THE MESSAGE AREA
const message = document.getElementById("message");

// GENERATE MEMBER ID
function generateMemberID() {
    return "LDS-" + Date.now();
}

// GET EXISTING MEMBERS
function getMembers() {
    return JSON.parse(localStorage.getItem("ldsMembers")) || [];
}

// REGISTER NEW MEMBER
memberForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // COLLECT FORM DATA
    const fullName = document.getElementById("fullName").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const location = document.getElementById("location").value.trim();
    const gender = document.getElementById("gender").value;
    const department = document.getElementById("department").value;
    const status = document.getElementById("status").value;

    // CHECK REQUIRED INFORMATION
    if (
        !fullName ||
        !contact ||
        !location ||
        !gender ||
        !department ||
        !status
    ) {
        message.textContent = "Please complete all required fields.";
        message.style.color = "red";
        return;
    }

    // CREATE MEMBER OBJECT
    const newMember = {
        memberID: generateMemberID(),
        fullName: fullName,
        contact: contact,
        location: location,
        gender: gender,
        department: department,
        status: status,
        registrationDate: new Date().toLocaleDateString()
    };

    // SAVE MEMBER
    const members = getMembers();

    members.push(newMember);

    localStorage.setItem("ldsMembers", JSON.stringify(members));

    // DISPLAY SUCCESS MESSAGE
    message.textContent =
        "Registration successful! Your Member ID is: " +
        newMember.memberID;

    message.style.color = "green";

    // CLEAR FORM
    memberForm.reset();

});

// DISPLAY TOTAL REGISTERED MEMBERS IN CONSOLE
console.log("LDS Fellowship Registration System Ready.");