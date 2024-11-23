// Function to load and insert the header
async function loadHeader() {
    try {
        // Fetch the header template
        const response = await fetch('components/header.html');
        const text = await response.text();
        
        // Create a temporary container
        const temp = document.createElement('div');
        temp.innerHTML = text;
        
        // Get the template content
        const template = temp.querySelector('#header-template');
        
        // Clone and insert the template content
        const clone = template.content.cloneNode(true);
        document.querySelector('#header-container').appendChild(clone);
        
        // Initialize menu toggle functionality after template is loaded
        initMenuToggle();
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

// Initialize menu toggle functionality
function initMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.links');
    const line1 = menuToggle.querySelector('.line-1');
    const line2 = menuToggle.querySelector('.line-2');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        if (menuToggle.classList.contains('active')) {
            // First line transforms
            line1.setAttribute('y1', '12');
            line1.setAttribute('y2', '12');
            line1.setAttribute('transform', 'rotate(45, 12, 12)');
            
            // Second line transforms
            line2.setAttribute('y1', '12');
            line2.setAttribute('y2', '12');
            line2.setAttribute('transform', 'rotate(-45, 12, 12)');
        } else {
            // Reset first line
            line1.setAttribute('y1', '7');
            line1.setAttribute('y2', '7');
            line1.setAttribute('transform', 'rotate(0)');
            
            // Reset second line
            line2.setAttribute('y1', '17');
            line2.setAttribute('y2', '17');
            line2.setAttribute('transform', 'rotate(0)');
        }
    });

    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            
            // Reset lines
            line1.setAttribute('y1', '7');
            line1.setAttribute('y2', '7');
            line1.setAttribute('transform', 'rotate(0)');
            
            line2.setAttribute('y1', '17');
            line2.setAttribute('y2', '17');
            line2.setAttribute('transform', 'rotate(0)');
        }
    });
}

// Load the header when the document is ready
document.addEventListener('DOMContentLoaded', loadHeader);