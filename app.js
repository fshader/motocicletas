function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
  let section = document.getElementById('resultados-pesquisa');
  
  let campoPesquisa = document.getElementById('campo-pesquisa').value;

  //se campoPesquisa for uma string vazia
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi enciontrado. Você precisa digitar o nome de uma motocicleta ou marca.</p>"
    return 
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados formatados.
  let resultados = "";
  let titulo = ""; 
  let dscricao = "";

  // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array).
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    //se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) ||  descricao.includes(campoPesquisa)) {

        //Cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">SAIBA MAIS</a>
        </div>
      `;
    } 
      }
  
      if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
      }
  section.innerHTML = resultados;
}
