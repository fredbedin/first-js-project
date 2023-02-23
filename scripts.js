let chave = "07faf66a7f7157667f67dbb51b3b984b"

function colocarNaTela(dados) {
    
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".desc").innerHTML = dados.weather[0].description
    document.querySelector(".umid").innerHTML = "Umidade: " + dados.main.humidity + "%"


}

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric")
        .then(resposta => resposta.json())

    colocarNaTela(dados)
}


function ButtonClick() {
    let cidade = document.querySelector(".input-cidade").value


    buscarCidade(cidade)
}
