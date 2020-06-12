module.exports = {
  getMeme: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.get_meme(+id).then((response) => {
      const data = response[0];
      res.status(200).send(data);
    });
  },

  getAllMemes: (req, res) => {
    const db = req.app.get("db");
    db.get_memes().then((data) => res.status(200).send(data));
  },

  addMeme: (req, res) => {
    const db = req.app.get("db");
    const { url, title } = req.body;

    db.add_meme([url, title]).then(() => res.sendStatus(500));
  },

  updateMeme: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { url, title } = req.body;

    db.update_meme([id, url, title]).then(() => res.sendStatus(200));
  },

  deleteMeme: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.delete_meme(id).then((data) => res.sendStatus(200));
  },
};
