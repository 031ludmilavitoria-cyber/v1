const mesAno = document.getElementById("mesAno");
const diasContainer = document.getElementById("dias");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let data = new Date();

const meses = [
  "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
];

function renderCalendario() {
  const ano = data.getFullYear();
  const mes = data.getMonth();

  const primeiroDia = new Date(ano, mes, 1).getDay();
  const ultimoDia = new Date(ano, mes + 1, 0).getDate();

  mesAno.innerText = `${meses[mes]} ${ano}`;

  diasContainer.innerHTML = "";

  // Espaços vazios
  for (let i = 0; i < primeiroDia; i++) {
    diasContainer.innerHTML += `<div></div>`;
  }

  // Dias
  for (let i = 1; i <= ultimoDia; i++) {
    const hoje = new Date();

    let classe = "";

    if (
      i === hoje.getDate() &&
      mes === hoje.getMonth() &&
      ano === hoje.getFullYear()
    ) {
      classe = "hoje";
    }

    diasContainer.innerHTML += `<div class="${classe}" onclick="selecionar(this)">${i}</div>`;
  }
}

// Selecionar dia
function selecionar(el) {
  document.querySelectorAll("#dias div").forEach(d => d.classList.remove("ativo"));
  el.classList.add("ativo");
}

// Navegação
prev.onclick = () => {
  data.setMonth(data.getMonth() - 1);
  renderCalendario();
};

next.onclick = () => {
  data.setMonth(data.getMonth() + 1);
  renderCalendario();
};

renderCalendario();