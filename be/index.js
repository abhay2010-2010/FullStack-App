const express = require("express");
const { dbconnect } = require("./config/config");
const { userRouter } = require("./routes/user.routes");
const { noteRouter } = require("./routes/note.route");
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())

app.use("/user", userRouter)

app.use("/notes", noteRouter);

app.listen(3000, async (req, res) => {
    try {
        await dbconnect;
        console.log("Server is running on port 3000");

    } catch (error) {
        console.log(error);
    }

});