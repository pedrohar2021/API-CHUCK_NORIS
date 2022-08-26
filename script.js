async function getAdvice(){
    const resp = await fetch ('https://api.chucknorris.io/jokes/random')

    const data = await resp.json()

    document.querySelector('#frase').innerText = data.value

    console.log(data.value);
}

const btnGetAdvice = document.querySelector('#get-advice')

btnGetAdvice.addEventListener("click", function (){
    getAdvice()
})