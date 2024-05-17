const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;
const COMMENTS_FILE = 'comments.txt';

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/comments', (req, res) => {
  const comment = req.body.comment + '\n';
  fs.appendFile(COMMENTS_FILE, comment, (err) => {
    if (err) {
      console.error('Error writing comment:', err);
      res.status(500).send('Error al escribir el comentario');
    } else {
      console.log('Comentario escrito:', comment);
      res.status(200).send('Comentario enviado correctamente');
    }
  });
});

app.get('/comments', (req, res) => {
  fs.readFile(COMMENTS_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading comments:', err);
      res.status(500).send('Error al leer los comentarios');
    } else {
      const comments = data.split('\n').filter(comment => comment.trim() !== '');
      res.json({ comments });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
