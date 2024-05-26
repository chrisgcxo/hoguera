document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const commentInput = document.getElementById("commentInput").value.trim(); // Eliminar espacios en blanco al inicio y al final
    
    // Validar si el comentario está vacío
    if (commentInput === "") {
        alert("Por favor, escribe un comentario antes de enviar.");
        return; // Detener la ejecución de la función si el comentario está vacío
    }
//cada vez que se prenda hay que pegar el codigo del ngrok 
    fetch("https://a26a-2800-810-5ef-1-9d3f-aaf6-1d67-598c.ngrok-free.app/comments", {
 
         
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
