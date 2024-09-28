// Function for visibility of a section
function togglesectionVisibility(sectionId: string, button: HTMLButtonElement): void {
  const section = document.getElementById(sectionId);
  
  // Check if section exists
  if (section !== null) {
    if(section.style.display ==="none"|| section.style.display === "")
    {
      section.style.display ="block" ;
      button.textContent =`Hide ${sectionId}`;
    }
    else{
      section.style.display ="none";
      button.textContent= `Show ${sectionId}`;
    }
  }
}


document.addEventListener("DOMContentLoaded", () => {

  const toggleEducationBtn = document.getElementById('toggle-education-btn') as HTMLButtonElement;
  const toggleSkillsBtn = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
  const toggleWorkBtn = document.getElementById('toggle-work-btn') as HTMLButtonElement;

  if (toggleEducationBtn) {
      toggleEducationBtn.addEventListener('click', () => togglesectionVisibility('education', toggleEducationBtn));
  }

  if (toggleSkillsBtn) {
      toggleSkillsBtn.addEventListener('click', () => togglesectionVisibility('skills', toggleSkillsBtn));
  }

  if (toggleWorkBtn) {
      toggleWorkBtn.addEventListener('click', () => togglesectionVisibility('work-experience', toggleWorkBtn));
  }
});
