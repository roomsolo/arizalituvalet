const fs = require('fs');
const path = require("path")

const caught = fs.readdirSync("games", { withFileTypes: true })
  .filter(item => item.isDirectory())
  .map(item => item.name)

const games = []
for (const caughtN of caught) {
    const yol = path.join("games", caughtN, "metadata.json")
    const raw = fs.readFileSync(yol, "utf-8")
    const metadata = JSON.parse(raw)
    metadata.folder = caughtN
    games.push(metadata)
}

console.log(caught)
console.log(games)
fs.writeFileSync("games-list.json", JSON.stringify(games, null, 2))
