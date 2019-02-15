window.onhashchange = function(e){
    let valorHashNovo = e.newURL.split('#')[1]
    let valorHashAntigo = e.oldURL.split('#')[1]
    document.getElementById(valorHashNovo).classList.add("ativo")
    document.getElementById(valorHashAntigo).classList.remove("ativo")
}