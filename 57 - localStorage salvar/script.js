function salvar() {
  localStorage.info = document.getElementById("dado").value;
}

function carregar() {
  if (localStorage.info) {
    document.getElementById("dado").value = localStorage.info;
  }
}
