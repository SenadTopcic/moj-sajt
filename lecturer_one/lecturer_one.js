document.addEventListener("DOMContentLoaded", () => {
    fetch('lectures.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('lecture-table-body');
            data.forEach(lecture => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${lecture.title}</td>
                    <td><a href="${lecture.youtubeLink}" target="_blank">Watch</a></td>
                    <td>
                        <button onclick="showModal('${lecture.description}')">View Description</button>
                    </td>
                    <td><a href="${lecture.pdfLink}" download>Download PDF</a></td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching lecture data:', error));
});

function showModal(description) {
    const modal = document.getElementById('myModal');
    const modalDescription = document.getElementById('modal-description');
    modalDescription.innerText = description;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
