const imagemVisualizacao = document.getElementById('imagem-visualizacao')
const tituloProduto = document.getElementById('titulo-produto')
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

let opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
let opcoesTamanho = ['41 mm', '45 mm']
let imagemSelecionada = 1;
let tamanhoSelecionado = 1;

function trocarImagem(){
  const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
  imagemSelecionada = idOpcaoSelecionada.charAt(0);
  imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpeg'
}

function trocarTamanho(){
  const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id
  tamanhoSelecionado = idOpcaoSelecionada.charAt(0);

  tituloProduto.innerText = "Pulseira loop esportiva azul-inverno para caixa de " + opcoesTamanho[tamanhoSelecionado];

  if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){
    imagemVisualizacao.classList.add('caixa-pequena')
  }else {
    imagemVisualizacao.remove('caixa-pequena')
  }
}
