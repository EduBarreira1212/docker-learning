import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    return res.send("Docker training");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});