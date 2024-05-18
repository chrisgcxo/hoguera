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
        console.log("Comentario enviado:", data); // Mensaje de confirmación en la consola
        document.getElementById("commentInput").value = ""; // Limpiar el campo de comentarios
    })
    .catch(error => {
        console.error("Error al enviar comentario:", error);
    });
});
