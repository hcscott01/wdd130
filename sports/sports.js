// Select all images and add event listener for fullscreen pop-out effect
document.querySelectorAll('.best_around, .football, .baseball').forEach((img) => {
    img.style.cursor = 'pointer'; // Add pointer cursor for interactivity
    img.addEventListener('click', () => {
        // Create a fullscreen container
        const fullscreenContainer = document.createElement('div');
        fullscreenContainer.style.position = 'fixed';
        fullscreenContainer.style.top = '0';
        fullscreenContainer.style.left = '0';
        fullscreenContainer.style.width = '100vw';
        fullscreenContainer.style.height = '100vh';
        fullscreenContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        fullscreenContainer.style.display = 'flex';
        fullscreenContainer.style.alignItems = 'center';
        fullscreenContainer.style.justifyContent = 'center';
        fullscreenContainer.style.zIndex = '1000';
        fullscreenContainer.style.cursor = 'pointer';

        // Clone the image and add it to the container
        const fullscreenImage = img.cloneNode(true);
        fullscreenImage.style.maxWidth = '90%';
        fullscreenImage.style.maxHeight = '90%';
        fullscreenContainer.appendChild(fullscreenImage);

        // Add container to the body
        document.body.appendChild(fullscreenContainer);

        // Remove fullscreen container on click
        fullscreenContainer.addEventListener('click', () => {
            document.body.removeChild(fullscreenContainer);
        });
    });
});

// Create a comment section above the footer
const footer = document.querySelector('footer');
const commentSection = document.createElement('div');
commentSection.id = 'commentSection';
commentSection.style.padding = '20px';
commentSection.style.backgroundColor = '#f9f9f9';
commentSection.style.borderTop = '1px solid #ccc';
commentSection.innerHTML = `
    <h3 style="text-align: center; color: #493D67;">Leave a Comment</h3>
    <textarea id="commentInput" placeholder="Write your comment here..." rows="3" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px;"></textarea>
    <button id="addCommentButton" style="display: block; margin: 0 auto; padding: 10px 20px; background-color: #493D67; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Add Comment</button>
    <ul id="commentsList" style="list-style-type: none; padding: 0; margin-top: 20px;"></ul>
`;

// Insert the comment section before the footer
footer.parentNode.insertBefore(commentSection, footer);

// Add comment functionality
document.getElementById('addCommentButton').addEventListener('click', () => {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    if (commentText) {
        const commentList = document.getElementById('commentsList');
        const newComment = document.createElement('li');
        newComment.textContent = commentText;
        newComment.style.padding = '10px';
        newComment.style.borderBottom = '1px solid #ccc';
        commentList.appendChild(newComment);
        commentInput.value = ''; // Clear the text area
    }
});
