let resposta 

console.log("Você toca algum instrumento?")

process.stdin.on("data", function(data){
 let input = data.toString(). trim(). toLowerCase()


 if (!resposta){
    resposta. input

if (resposta =="sim" || resposta == "s"){
    console.log("Qual?")
}else if (resposta== "nao" || resposta == "n"){

    console.log("que pena")
    process.exit()

}else{
    resposta = undefined
    console.log("digite novamente, não entendi.")
}
}})