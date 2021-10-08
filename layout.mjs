function header(header){
    return `
        <header style="
            background: tomato;
            padding: 10px;
            color: #fff;
            text-align: center;
        ">
            ${header}
        </header>
    `
}

function content(content){
    return `
        <main class="main">
            ${content}
        </main>
    `
}

function footer(footer){
    return `
        <footer style="
            background: lightgray;
            padding: 10px;
            text-align: center;
        ">
            ${footer}
        </footer>
    `
}

export { header, content, footer }