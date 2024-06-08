const key = "eabbea59865cddbfbce370fb376a9f64";



function colocarDados(dados) {
    document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name
    console.log(dados)
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector('.texto-tempo').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = "Umidade: " + dados.main.humidity + "%"
    //document.querySelector("imagem-tempo").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    console.log(dados.weather[0].icon)
}

async function buscarCidade(input) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDados(dados)

}

function cliqueiNoBotao() {
    const input = document.querySelector(".input-city").value

    buscarCidade(input)

}