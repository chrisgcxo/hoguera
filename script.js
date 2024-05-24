document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const commentInput = document.getElementById("commentInput").value;

    fetch("https://c53a-186-57-5-35.ngrok-free.app/comments", {
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
        const confirmationMessage = document.createElement("div");
        confirmationMessage.textContent = "¡Comentario enviado correctamente!";
        document.body.appendChild(confirmationMessage);
        
        // Cerrar automáticamente el mensaje después de 3 segundos
        setTimeout(function() {
            confirmationMessage.remove();
        }, 3000);

        // Limpiar el campo de entrada
        document.getElementById("commentInput").value = "";
    })
    .catch(error => {
        console.error("Error al enviar comentario:", error);
    });
});
