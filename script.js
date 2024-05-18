document.getElementById("commentForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const commentInput = document.getElementById("commentInput").value;

  fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ comment: commentInput })
  })
  .then(response => response.text())
  .then(data => {
      console.log(data);
      // Mostrar mensaje de confirmación al usuario
      alert("¡Comentario enviado correctamente!");
      // Limpiar el campo de entrada
      document.getElementById("commentInput").value = "";
  })
  .catch(error => {
      console.error("Error al enviar comentario:", error);
  });
});
