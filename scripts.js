document.addEventListener('DOMContentLoaded', () => {
    const postId = new URLSearchParams(window.location.search).get('post');

    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            if (posts[postId]) {
                document.getElementById('post-title').textContent = posts[postId].title;
                
                // Clear the src before setting the new video source
                const videoElement = document.getElementById('post-video');
                videoElement.src = ''; // Clear the current src
                videoElement.src = posts[postId].video; // Set new video src

                document.getElementById('post-content').innerHTML = posts[postId].content;
            } else {
                document.getElementById('post-title').textContent = 'Post Not Found';
                document.getElementById('post-content').innerHTML = '<p>The post you are looking for does not exist.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
});