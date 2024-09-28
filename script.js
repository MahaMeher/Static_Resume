// Function for visibility of a section
function togglesectionVisibility(sectionId, button) {
    var section = document.getElementById(sectionId);
    if (section !== null) {
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
            button.textContent = "Hide ".concat(sectionId);
        }
        else {
            section.style.display = "none";
            button.textContent = "Show ".concat(sectionId);
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    
    var toggleEducationBtn = document.getElementById('toggle-education-btn');
    var toggleSkillsBtn = document.getElementById('toggle-skills-btn');
    var toggleWorkBtn = document.getElementById('toggle-work-btn');
    if (toggleEducationBtn) {
        toggleEducationBtn.addEventListener('click', function () { return togglesectionVisibility('education', toggleEducationBtn); });
    }
    if (toggleSkillsBtn) {
        toggleSkillsBtn.addEventListener('click', function () { return togglesectionVisibility('skills', toggleSkillsBtn); });
    }
    if (toggleWorkBtn) {
        toggleWorkBtn.addEventListener('click', function () { return togglesectionVisibility('work-experience', toggleWorkBtn); });
    }
});
