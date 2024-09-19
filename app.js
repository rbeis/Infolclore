function pesquisar() {
  // Declara uma variável para armazenar os resultados da pesquisa, iniciando como uma string vazia.
  let resultados = "";

  // Obtém a seção HTML com o ID "resultados-pesquisa" para inserir os resultados.
  let section = document.getElementById("resultados-pesquisa");

  // Obtém a seção HTML com ID "campo-pesquisa" para 
  let campoPesquisa = document.getElementById("campo-pesquisa").value
  campoPesquisa = campoPesquisa.toLowerCase()

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Procure por alguma lenda ou mito</p>"
    return resultados
  }

  let titulo = "";
  let descricao = "";

  // Itera sobre cada elemento (dado) no array "dados".
  for (let dado of dados) {
    titulo = dado.nome.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    //Se titulo includes campoPesquisa então, faça...
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      // cria um novo elemento
      resultados += `
      <div class="item-resultado">
          <h2>
              <a href="#">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais Informações</a>     
      </div>
      `;
    }
    // Concatena HTML para criar um novo elemento "div" para cada resultado, incluindo o nome, descrição e link do dado atual.

    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
    }
  }

  // Atribui o HTML gerado para a propriedade innerHTML da seção, substituindo o conteúdo anterior pelos novos resultados.
  section.innerHTML = resultados;
}


