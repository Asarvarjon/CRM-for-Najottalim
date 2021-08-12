const fs = require("fs").promises
const path = require("path")


module.exports = async function HomeRoute(req, res) {
    const indexFilePath = path.join(__dirname, "..", "Public", "index.html")
    let home = await fs.readFile(indexFilePath, "utf-8")

    res.send(home)
}