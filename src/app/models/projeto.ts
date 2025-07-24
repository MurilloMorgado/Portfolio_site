export interface Botao {
  texto: string;
  tipo: string;
  classe: string;
  link: string;
}

export interface Imagem {
  src: string;
  alt: string;
}

export interface Projeto {
  titulo: string;
  imagem: Imagem;
  descricao: string;
  tecnologias: string;
  botoes: Botao[];
}

export interface SecaoProjetos {
  secao: string;
  projetos: Projeto[];
}
