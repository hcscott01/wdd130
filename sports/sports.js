document.querySelectorAll('.best_around, .football, .baseball').forEach((img) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
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

        const fullscreenImage = img.cloneNode(true);
        fullscreenImage.style.maxWidth = '90%';
        fullscreenImage.style.maxHeight = '90%';
        fullscreenContainer.appendChild(fullscreenImage);

        document.body.appendChild(fullscreenContainer);

        fullscreenContainer.addEventListener('click', () => {
            document.body.removeChild(fullscreenContainer);
        });
    });
});

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

footer.parentNode.insertBefore(commentSection, footer);

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
        commentInput.value = '';
    }
});
