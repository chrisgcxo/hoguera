event.preventDefault();
  const commentInput = document.getElementById("commentInput").value;	  const commentInput = document.getElementById("commentInput").value;


  fetch("/comments", {	  fetch("http://localhost:3000/comments", {
    method: "POST",	    method: "POST",
    headers: {	    headers: {
      "Content-Type": "application/json"	      "Content-Type": "application/json"
@@ -20,7 +20,7 @@ document.getElementById("commentForm").addEventListener("submit", function(event
});	});


function loadComments() {	function loadComments() {
  fetch("/comments")	  fetch("http://localhost:3000/comments")
    .then(response => response.json())	    .then(response => response.json())
    .then(data => {	    .then(data => {
      const comments = data.comments;	      const comments = data.comments;

