const express = require ('express');
const app = express();
const port = 3000;
const user = require("./user")
const book = require("./book")
const rent = require("./rent")

//menggunakan modul
app.use("/user", user);
app.use("/book", book);
app.use("/rent", rent);

//routing
app.get("/", (req, res) => {
    res.send("Ambil data");
});
app.post("/", (req, res) => {
    res.send("Kirim data");
});
app.put("/", (req, res) => {
    res.send("Edit data");
});
app.patch("/", (req, res) => {
    res.send("Edit data");
});
app.delete("/", (req, res) => {
    res.send("Hapus data");
});
app.listen(port, () => {
    console.log("Aplikasi berjalan pada : ${port}");
});