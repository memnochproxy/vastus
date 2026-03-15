// Get the canvas element and its 2D rendering context
const canvas = document.getElementById('svgCanvas');
const ctx = canvas.getContext('2d');

// Define the path to your SVG file
const svgUrl = 'drawing.svg'; // Replace with the actual file path

// Create a new Image object
const img = new Image();

// Set up the onload event handler
img.onload = function() {
    // Ensure canvas dimensions match the image's natural dimensions for best results
    // You can adjust this as needed for your layout
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    
    // Draw the image onto the canvas at coordinates (0, 0)
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

// Handle potential errors during image loading
img.onerror = function() {
    console.error('Failed to load the SVG image.');
};

// Set the source of the Image object to the SVG file URL
// This starts the loading process
img.src = svgUrl;

