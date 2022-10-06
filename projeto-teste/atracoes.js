//criar uma classe para cada componente
//criar botoes para cada componente
//descobrir sobre o que vc quer fazer o site

const atracoes = [
  {
    nomeAtracao: "Palhaço",
    dia: "segunda-feira",
    tempoApresentacao: "8 horas",
    tema: "trabalho",
    imagem: "",
  },
  {
    nomeAtracao: "Malabarista",
    dia: "segunda-feira",
    tempoApresentacao: "8 horas",
    tema: "trabalho",
    imagem: "",
  },
  {
    nomeAtracao: "Palhaço",
    dia: "segunda-feira",
    tempoApresentacao: "8 horas",
    tema: "trabalho",
    imagem: "",
  },
  {
    nomeAtracao: "Palhaço",
    dia: "segunda-feira",
    tempoApresentacao: "8 horas",
    tema: "trabalho",
    imagem: "",
  },
];

class Atracao {
  constructor(nomeAtracao, dia, tempoApresentacao, tema, imagem) {
    this.nomeAtracao = nomeAtracao;
    this.dia = dia;
    this.tempoApresentacao = tempoApresentacao;
    this.tema = tema;
    this.imagem = imagem;
  }

  renderComCreate() {
    const avatarDiv = document.createElement("div");
    avatarDiv.setAttribute("class", "avatar background");

    const avatarImg = document.createElement("img");
    avatarImg.src = this.usuario.imagem;
    avatarImg.setAttribute("class", "img-rounded");

    const avatarTitle = document.createElement("h2");
    avatarTitle.innerHTML = this.usuario.nome;
    avatarTitle.setAttribute("class", "nome");

    const avatarDescricao = document.createElement("p");
    avatarDescricao.innerHTML = this.usuario.descricao;

    avatarDiv.appendChild(avatarImg);
    avatarDiv.appendChild(avatarTitle);
    avatarDiv.appendChild(avatarDescricao);

    document.getElementById("cards-section").appendChild(avatarDiv);
  }

  render() {
    const avatar = `<div class="avatar background">
            <img class="img-rounded" src=${this.usuario.imagem} />
            <h2>${this.usuario.nome}</h2>
            <p>${this.usuario.descricao}</p>
          </div>`;
    document
      .getElementById("cards-section")
      .insertAdjacentHTML("beforeend", avatar);
  }
}

users.map((user, index) => {
  new Perfil(user).renderComCreate();
});

document
  .getElementById("cards-section")
  .insertAdjacentHTML("beforeend", "<br/><br/>");

users.forEach((user) => {
  new Perfil(user).render();
});
