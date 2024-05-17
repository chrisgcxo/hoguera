document.getElementById("commentForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const commentInput = document.getElementById("commentInput").value;

  // Enviar comentario al archivo 'comments.txt'
  fetch("comments.txt", {
    method: "POST",
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
  // Solicitar comentarios directamente desde el archivo 'comments.txt'
  fetch("comments.txt")
    .then(response => response.text())
    .then(data => {
      // Dividir el texto en líneas y filtrar las líneas vacías
      const comments = data.split("\n").filter(comment => comment.trim() !== "");
      // Mostrar los comentarios en el DOM
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
