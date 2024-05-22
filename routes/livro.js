const express = require("express");
const livroRouter = express.Router();
const db = require("../models"); // Importa o objeto db
const livro = db.livro; // Acede o modelo livro
const authenticate = require('../middleware/authMiddleware');

// Create
livroRouter.post("/", authenticate, async (req, res) => {
    try {
      console.log(JSON.stringify(req.body));
      const newLivro = await livro.create(req.body);
      res.status(201).json(newLivro);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Get All
livroRouter.get("/", async (req, res) => {
    try {
        const allLivros = await livro.findAll();
        res.json(allLivros);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
  
  // Read
  livroRouter.get("/:livroId", async (req, res) => {
    try {
      const foundLivro = await livro.findByPk(req.params.livroId);
      if (foundLivro) {
        res.json(foundLivro);
      } else {
        res.status(404).json({ error: "Livro not found" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Update
  livroRouter.put("/:livroId", authenticate, async (req, res) => {
    try {
      const [updated] = await livro.update(req.body, {
        where: { livroId: req.params.livroId },
      });
      if (updated) {
        const updatedLivro = await livro.findByPk(req.params.livroId);
        res.json(updatedLivro);
      } else {
        res.status(404).json({ error: "Livro not found" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Delete
  livroRouter.delete("/:livroId", authenticate, async (req, res) => {
    try {
      const deleted = await livro.destroy({
        where: { livroId: req.params.livroId },
      });
      if (deleted) {
        res.status(204).send("Livro deleted");
      } else {
        res.status(404).json({ error: "Livro not found" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

module.exports = livroRouter;