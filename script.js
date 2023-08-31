function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./IMG/Perfil_Global_Oculos.png")
  } else {
    img.setAttribute("src", "./IMG/Perfil Global.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Igor Silva usando camisa preta, oculos escuros e fundo iluminado por led Azul"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Igor Silva usando camisa preta, fundo iluminado por led Azul"
    )
  }
}

// a Função "html.classlist.toggle("light")"
// tem o mesmo efeito da função citada acima, porem de forma mais simplificada.
