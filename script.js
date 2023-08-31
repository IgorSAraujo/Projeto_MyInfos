function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}

// a Função "html.classlist.toggle("light")"
// tem o mesmo efeito da função citada acima, porem de forma mais simplificada.
