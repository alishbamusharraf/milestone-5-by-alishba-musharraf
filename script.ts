document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get reference to form elements using their IDs
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    //**
    const usernameElement = document.getElementById(
        "username"
        ) as HTMLInputElement;

    // Check if all form elements are present

    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillsElement && 

//**
      usernameElement

    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;

//** 
const username = usernameElement.value;
const uniquepath = `resumes/${username.replace(/\s+/g,'-')}-cv.html`


  
      // Create resume output
      const resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureInput.files && profilePictureInput.files[0] ?
         `<img src="${URL.createObjectURL(profilePictureInput.files[0])}" alt="Profile Picture" class='profile-picture'>` : ""}
        <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
        <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
        <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
        
        <h3>Education</h3>
        <p id="edit-education" class="editable">${education}</p>
        
        <h3>Experience</h3>
        <p id="edit-experience" class="editable">${experience}</p>
        
        <h3>Skills</h3>
        <p id="edit-skills" class="editable">${skills}</p>
      `;
//

  // resume output
      const resumeOutputElement = document.getElementById('resumeOutput');
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.classList.remove("hidden");

        // create container for buttons
        const buttonContainer = document.createElement("div");
        buttonContainer.id ="buttonContainer";
        resumeOutputElement.appendChild(buttonContainer);

       //Add Download PDF button
       const DownloadButton = document.createElement("button");
       DownloadButton.id ="Download as PDF";
       DownloadButton.addEventListener("click",()=> {
        window.print();
       });
       buttonContainer.appendChild(DownloadButton);


       //Add shareable link button 
       const shareLinkButton = document.createElement("buttons");
       shareLinkButton.textContent = "copy shareable link";
      
       resumeOutputElement.style.display = "block";
      }
    }else{
           console.error("one or more elements are missing.");
    }
  });
  
  