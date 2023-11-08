


function DadosTela(dados){

    document.querySelector('.titulo-cidade').innerHTML = "Tempo em " + dados.name
    document.querySelector('.graus').innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.previsao-texto').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = "Umidade relativa do ar: " + dados.main.humidity + " %"
}



const key = "dab66747f209870ba5910ce7b2f393af"


async function Buscardados(cidade){

        const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then((Response => Response.json()))
        DadosTela(dados)
        console.log(dados)
}




function CliqueBotao(){
    const cidade = document.querySelector('.input-cidade').value
    Buscardados(cidade)
}
