const TEBI = "https://s3.tebi.io/aafl2" // ← bucket adını yaz

fetch("games-list.json")
  .then(response => response.json())
  .then(games => {
    const container = document.getElementById("games-container")

    document.getElementById("random-buton").onclick = () => {
      const rastgele = games[Math.floor(Math.random() * games.length)]
      if (rastgele.type === "html5" || rastgele.type === "unity") {
        window.location.href = `oyun.html?url=${TEBI}/games/${rastgele.folder}/index.html`
      } else if (rastgele.type === "ruffle") {
        window.location.href = `ruffle.html?game=${TEBI}/games/${rastgele.folder}/game.swf`
      }
    }

    for (const game of games) {
      const kart = document.createElement("div")

      const baslik = document.createElement("h3")
      baslik.textContent = game.name

      const buton = document.createElement("button")
      buton.textContent = "Oyna"
      buton.onclick = () => {
        if (game.type === "html5" || game.type === "unity") {
          window.location.href = `oyun.html?url=${TEBI}/games/${game.folder}/index.html`
        } else if (game.type === "ruffle") {
          window.location.href = `ruffle.html?game=${TEBI}/games/${game.folder}/game.swf`
        }
      }

      kart.classList.add("content")
      kart.classList.add("button")
      kart.appendChild(baslik)
      kart.appendChild(buton)
      container.appendChild(kart)
    }
  })

document.getElementById("arama").oninput = function() {
  const aranan = this.value.toLowerCase()
  const kartlar = document.querySelectorAll(".content")
  
  kartlar.forEach(kart => {
    const isim = kart.querySelector("h3").textContent.toLowerCase()
    if (isim.includes(aranan)) {
      kart.style.display = "block"
    } else {
      kart.style.display = "none"
    }
  })
}