function pesquisar() {
  // Declara uma variável para armazenar os resultados da pesquisa, iniciando como uma string vazia.
  let resultados = "";

  // Obtém a seção HTML com o ID "resultados-pesquisa" para inserir os resultados.
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa, converte para minúsculas para facilitar a comparação.
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Verifica se o campo de pesquisa está vazio. Se estiver, exibe uma mensagem personalizada e retorna.
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Procure por alguma lenda ou mito</p>";
    return resultados;
  }

  // Declara variáveis para armazenar o título, descrição e tags em minúsculas para comparação.
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada elemento (dado) no array "dados".
  for (let dado of dados) {
    // Converte o título, descrição e tags do dado atual para minúsculas.
    tags = dado.tags.toLowerCase();
    titulo = dado.nome.toLowerCase();
    descricao = dado.descricao.toLowerCase();

    // Verifica se o campo de pesquisa está contido no título, descrição ou tags.
    // Se estiver, adiciona o resultado à string de resultados.
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento "div" para o resultado.
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
  }

  // Verifica se nenhum resultado foi encontrado e exibe uma mensagem caso necessário.
  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  // Atribui os resultados à seção HTML, substituindo o conteúdo anterior.
  section.innerHTML = resultados;
}