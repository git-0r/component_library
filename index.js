const express = require("express")
const path = require("path")
const app = express()


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
app.use(express.static(path.join(__dirname, "/public")))

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/docs/component/avatar", (req, res) => {
    res.render("comp_avatar")
})

app.get("/docs/component/badge", (req, res) => {
    res.render("comp_badge")
})

app.get("/docs/component/image", (req, res) => {
    res.render("comp_image")
})

app.get("/docs/component/alert", (req, res) => {
    res.render("comp_alert")
})

app.get("/docs/component/button", (req, res) => {
    res.render("comp_button")
})

app.get("/docs/component/input", (req, res) => {
    res.render("comp_input")
})

app.get("/docs/component/card", (req, res) => {
    res.render("comp_card")
})

app.get("/docs/component/text", (req, res) => {
    res.render("comp_text")
})

app.get("/docs/component/list", (req, res) => {
    res.render("comp_list")
})

app.get("/docs/component/navigation", (req, res) => {
    res.render("comp_navigation")
})

app.listen(3000, () => console.log("server on port 3000"))

module.exports = app