const imagemVisualizacao = document.getElementById('imagem-visualizacao')
const verdeCipreste = {
  nome: 'Verde-cipreste',
  nomePastaImagens: 'imagens-verde-cipreste',
};
const azulInverno = {
  nome: 'Azul-inverno',
  nomePastaImagens: 'imagens-azul-inverno',
};
const meiaNoite = {
  nome: 'Meia-noite',
  nomePastaImagens: 'imagens-meia-noite',
  emEstoque: false,
};
const estelar = {
  nome: 'Estelar',
  nomePastaImagens: 'imagens-estelar',
};
const rosaClaro = {
  nome: 'Rosa-claro',
  nomePastaImagens: 'imagens-rosa-claro',
};

let imagemSelecionada = 1;

function trocarImagem(){
  const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
  imagemSelecionada = idOpcaoSelecionada.charAt(0);
  imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpeg'
}