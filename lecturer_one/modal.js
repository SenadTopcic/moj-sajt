// Function to open modal
function openModal(description) {
    document.getElementById("modal-description").innerText = description;
    document.getElementById("myModal").style.display = "block";
}

// Function to close modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
