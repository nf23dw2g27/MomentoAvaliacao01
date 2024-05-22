const express = require("express");
const autorRouter = express.Router();
const db = require("../models"); // Importa o objeto db
const autor = db.autor; // Acede o modelo autor
const authenticate = require('../middleware/authMiddleware');

// // Create
autorRouter.post("/",authenticate, async (req, res) => {
   try {
     console.log(JSON.stringify(req.body));
     const newAutor= await autor.create(req.body);
     res.status(201).json(newAutor);
   } catch (err) {
     res.status(500).json({ error: err.message });
   }
});

  // Get All
autorRouter.get("/", async (req, res) => {
    try {
        const allautor = await autor.findAll();
        res.json(allautor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
  


// Read
autorRouter.get("/:autorId", async (req, res) => {
    try {
     const foundAutor = await autor.findByPk(req.params.autorId);
     if (foundAutor) {
       res.json(foundAutor);
     } else {
       res.status(404).json({ error: "Autor not found" });
     }
   } catch (err) {
     res.status(500).json({ error: err.message });
    }
});

// Update
autorRouter.put("/:autorId",authenticate, async (req, res) => {
   try {
    const [updated] = await autor.update(req.body, {
       where: { autorId: req.params.autorId },
    });
    if (updated) {
       const updatedAutor = await autor.findByPk(req.params.autorId);
       res.json(updatedAutor);
    } else {
       res.status(404).json({ error: "Autor not found" });
    }
   } catch (err) {
    res.status(500).json({ error: err.message });
   }
});

// Delete
autorRouter.delete("/:autorId", authenticate, async (req, res) => {
   try {
    const deleted = await autor.destroy({
       where: { autorId: req.params.autorId },
    });
    if (deleted) {
      res.status(204).send("Autor deleted");
    } else {
      res.status(404).json({ error: "Autor not found" });
    }
    } catch (err) {
    res.status(500).json({ error: err.message });
   }
});

module.exports = autorRouter;