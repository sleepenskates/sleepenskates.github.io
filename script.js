// --- Obfuscation Logic (NOT ACTUALLY SECURE) ---
// The correct code 199034 encoded in Base64
const encodedValue = "MTk5MDM0"; 

// Function to decode Base64
function getAccessCode(encoded) {
    // atob is the built-in JS function to decode Base64
    return atob(encoded); 
}

const correctCode = getAccessCode(encodedValue);

// --- UI Elements ---
const modal = document.getElementById("adminModal");
const vaultIcon = document.getElementById("adminVaultIcon");
const closeModal = document.getElementsByClassName("close-modal")[0];
const submitBtn = document.getElementById("submitCodeBtn");
const codeInput = document.getElementById("adminCode");
const adminPanelArea = document.getElementById("adminPanelArea");

const textureContainer = document.getElementById("textureContainer");
const addTextureBtn = document.getElementById("addTextureBtn");

// --- Modal Controls ---
// Open modal when vault is clicked
vaultIcon.onclick = function() {
  modal.style.display = "block";
  codeInput.focus();
}

// Close modal when (x) is clicked
closeModal.onclick = function() {
  modal.style.display = "none";
  // Reset admin panel state
  adminPanelArea.classList.add("hidden");
  codeInput.value = "";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    adminPanelArea.classList.add("hidden");
    codeInput.value = "";
  }
}

// --- Password Check ---
submitBtn.onclick = function() {
    if (codeInput.value === correctCode) {
        // Success! Reveal the temporary admin area
        adminPanelArea.classList.remove("hidden");
    } else {
        alert("Incorrect Access Code.");
        codeInput.value = "";
    }
}

// Allow pressing "Enter" in the input field
codeInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        submitBtn.click();
    }
});

// --- Temporary Texture Adder ---
// Note: This only adds cards in the current browser session.
// It does NOT permanently save them to GitHub.
addTextureBtn.onclick = function() {
    const title = document.getElementById("newTitle").value;
    const desc = document.getElementById("newDesc").value;
    const link = document.getElementById("newLink").value;

    if (title && desc && link) {
        // Create the HTML structure for the new card
        const newCardHTML = `
            <div class="card">
                <div class="card-content">
                    <h3>${title}</h3>
                    <p>${desc}</p>
                    <a href="${link}" class="download-btn">Download .rx2</a>
                </div>
            </div>
        `;

        // Add the new card to the container
        textureContainer.insertAdjacentHTML('beforeend', newCardHTML);

        // Clear the inputs
        document.getElementById("newTitle").value = "";
        document.getElementById("newDesc").value = "";
        document.getElementById("newLink").value = "";
        
        // Optionally close modal
        // modal.style.display = "none";
    } else {
        alert("Please fill in all fields.");
    }
}
