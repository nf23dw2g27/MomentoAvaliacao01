const express = require("express");
const editoraRouter = express.Router();
const db = require("../models"); // Importa o objeto db
const editora = db.editora; // Acede o modelo editora
const authenticate = require('../middleware/authMiddleware');

// // Create
editoraRouter.post("/", authenticate, async (req, res) => {
   try {
     console.log(JSON.stringify(req.body));
     const neweditora= await editora.create(req.body);
     res.status(201).json(neweditora);
   } catch (err) {
     res.status(500).json({ error: err.message });
   }
});

  // Get All
  editoraRouter.get("/", async (req, res) => {
    try {
        const alleditora = await editora.findAll();
        res.json(alleditora);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
  

// Read
editoraRouter.get("/:editoraId", async (req, res) => {
    try {
     const foundeditora = await editora.findByPk(req.params.editoraId);
     if (foundeditora) {
       res.json(foundeditora);
     } else {
       res.status(404).json({ error: "Editora não encontrada" });
     }
   } catch (err) {
     res.status(500).json({ error: err.message });
    }
});

// Update
editoraRouter.put("/:editoraId",  authenticate, async (req, res) => {
   try {
    const [updated] = await editora.update(req.body, {
       where: { editoraId: req.params.editoraId },
    });
    if (updated) {
       const updatededitora = await editora.findByPk(req.params.editoraId);
       res.json(updatededitora);
    } else {
       res.status(404).json({ error: "Editora não encontrada" });
    }
   } catch (err) {
    res.status(500).json({ error: err.message });
   }
});

// Delete
editoraRouter.delete("/:editoraId", authenticate, async (req, res) => {
   try {
    const deleted = await editora.destroy({
       where: { editoraId: req.params.editoraId },
    });
    if (deleted) {
      res.status(204).send("Editora apagada");
    } else {
      res.status(404).json({ error: "Editora não encontrada" });
    }
    } catch (err) {
    res.status(500).json({ error: err.message });
   }
});

module.exports = editoraRouter;