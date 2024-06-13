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
            "violão": "Que legal! O violão é um instrumento muito versátil.",
            "piano": "Incrível! O piano é um instrumento muito elegante.",
            "bateria": "Uau! A bateria dá o ritmo para as músicas.",
            "violino": "Maravilhoso! O violino tem um som muito bonito.",
            "flauta": "Muito bacana! A flauta é um instrumento com um som suave.",
        };

        if (mensagens[instrumento]) {
            console.log(mensagens[instrumento]);
        } else {
            console.log("Muito legal! É ótimo saber que você toca um instrumento.");
        }
        process.exit();
    }
});
