const params = new URLSearchParams(window.location.search)
const oyunYolu = params.get("game")

window.RufflePlayer = window.RufflePlayer || {}
const ruffle = window.RufflePlayer.newest()
const player = ruffle.createPlayer()

const container = document.getElementById("ruffle-container")
container.appendChild(player)

player.load(oyunYolu)