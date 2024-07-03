// Function to filter images based on category
function filterImages(category) {
    const gallery = document.getElementById('imageGallery');
    const allImages = gallery.querySelectorAll('.card');

    allImages.forEach(image => {
        const categoryClass = image.getAttribute('data-category');
        
        if (category === 'all' || categoryClass.includes(category)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Initially show all images
filterImages('all');
