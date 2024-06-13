let resposta;

console.log("Você toca algum instrumento?");

process.stdin.on("data", function(data){
    let input = data.toString().trim().toLowerCase();

    if (!resposta) {
        resposta = input;

        if (resposta == "sim" || resposta == "s") {
            console.log("Qual instrumento você toca?");
        } else if (resposta == "não" || resposta == "n") {
            console.log("Que pena!");
            process.exit();
        } else {
            resposta = undefined;
            console.log("Digite novamente, não entendi. Você toca algum instrumento? (sim/não)");
        }
    } else {
        let instrumento = input;
        let mensagens = {
            "violão": "Que legal!",
            "piano": "Incrível!",
            "bateria": "Uau!",
            "violino": "Maravilhoso!",
            "flauta": "Muito bacana!",
        };

        if (mensagens[instrumento]) {
            console.log(mensagens[instrumento]);
        } else {
            console.log("Muito legal! É ótimo saber que você toca um instrumento.");
        }
        process.exit();
    }
});
