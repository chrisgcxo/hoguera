document.getElementById("commentForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const commentInput = document.getElementById("commentInput").value;

  fetch("/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ comment: commentInput })
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);
    loadComments();
  })
  .catch(error => {
    console.error("Error al enviar comentario:", error);
  });
});

function loadComments() {
  fetch("/comments")
    .then(response => response.json())
    .then(data => {
      const comments = data.comments;
      const commentList = document.getElementById("commentList");
      commentList.innerHTML = "";
      comments.forEach(comment => {
        const p = document.createElement("p");
        p.textContent = comment;
        commentList.appendChild(p);
      });
    })
    .catch(error => {
      console.error("Error al cargar los comentarios:", error);
    });
}

// Cargar comentarios al cargar la página
window.addEventListener("load", loadComments);
