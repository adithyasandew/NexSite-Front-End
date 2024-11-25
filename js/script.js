document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <i class="bi bi-check-circle" style="font-size: 3rem; color: #4CAF50; margin-bottom: 1rem;"></i>
            <h2></h2>
            <p></p>
        </div>
    `;
    document.body.appendChild(modal);

    // Modal functions
    function showModal(success, message) {
        const modalContent = modal.querySelector('.modal-content');
        const icon = modal.querySelector('.bi');
        const title = modal.querySelector('h2');
        const text = modal.querySelector('p');

        if (success) {
            icon.className = 'bi bi-check-circle';
            icon.style.color = '#4CAF50';
            title.textContent = 'Success!';
        } else {
            icon.className = 'bi bi-x-circle';
            icon.style.color = '#ff3c00';
            title.textContent = 'Error!';
        }
        
        text.textContent = message;
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
    }

    function closeModal() {
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 300);
    }

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            showModal(false, 'Please fill in all fields.');
            return;
        }

        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        showModal(true, 'Your message has been sent successfully!');
        contactForm.reset();
    });

    // Close modal events
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
});