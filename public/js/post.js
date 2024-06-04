document.querySelector('#comment-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const content = document.querySelector('#comment').value.trim();
    const post_id = window.location.pathname.split('/').pop();
  
    if (content) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ content, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add comment');
      }
    }
  });
  