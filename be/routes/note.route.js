const express = require('express');
const { Note } = require('../usermodel/note.modal');
const { auth } = require('../middlewares/auth.iddleware');
const noteRouter = express.Router();

noteRouter.post("/", auth, async (req, res) => {
    console.log(req.body);
    try {
        const note = new Note(req.body);
        await note.save();
        res.status(200).send({ err: false, message: "Note created succesfully" })
    } catch (error) {
        res.status(404).json(error);
    }
})

noteRouter.get("/", auth, async (req, res) => {
    try {
        const note = await Note.find({ userID: req.body.userID });
        res.status(200).send({ err: false, Notes: note })
    } catch (error) {
        res.status(404).json(error);
    }
})

noteRouter.patch("/:id", auth, async (req, res) => {
    try {
        const note = await Note.findOne({ _id: req.params.id });
        if (note.userID === req.body.userID) {
            const updatednote = await Note.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).send({ err: false, message: "Note updated succesfully" })
        }
        else {
            res.status(200).send({ err: true, message: "You are not authorized to update this note" })
        }

    } catch (error) {
        res.status(404).json(error);
    }

})

noteRouter.delete("/:id", auth, async (req, res) => {
    try {
        const note = await Note.findOne({ _id: req.params.id });
        if (note.userID === req.body.userID) {
            await Note.findByIdAndDelete(req.params.id);
            res.status(200).send({ err: false, message: "Note deleted succesfully" })
        }
        else{
            res.status(200).send({ err: true, message: "You are not authorized to delete this note" })
        }
    } catch (error) {

    }
})

module.exports = {
    noteRouter
}
