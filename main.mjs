import { mostrarIdade, mostrarHobby, mostrarCidade } from "./funcoes.mjs";
import { header, content, footer } from "./layout.mjs"

let body = document.querySelector("#body")

body.innerHTML = header(`
    <h1>JavaScript</h1>
    <p><small>MÓDULO</small></p>
`)

body.innerHTML += content(`
    <p style="margin-bottom: 15px;">Sem dúvida um dos grandes e mais utilizados recursos (features) do JavaScript são os módulos (modules),
    hoje vou explicar como carregá-los de forma nativa no navegador, ou seja, sem a utilização de plugins ou
    bibliotecas de terceiros, está pronto? Vamos nessa.</p>

    <h2 style="margin-bottom: 5px;">Conhecendo os módulos</h2>
    <p>Resumidamente os módulos em JavaScript é uma forma de você compartilhar informações entre arquivos, dessa forma,
    todos os arquivos que realizarem a importação desse módulo poderão utilizar e usufruir de suas funções ou informações
    que foram expostas. Dessa maneira, evitamos ter que ficar carregando N arquivos .js em nosso HTML, além de não precisar
    se preocupar também com a ordem do carregamento.</p>

    <img
        src="https://www.luiztools.com.br/wp-content/uploads/2018/09/javascript.png"
        alt="Uma bela imagem"
    >
`)

body.innerHTML += footer(`Javascript - Módulos`)


console.log(mostrarIdade("Christian", 34))
console.log(mostrarCidade("Tangará da Serra"))
console.log(mostrarHobby("Tocar guitarra"))