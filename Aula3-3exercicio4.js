
// Função para classificar o animal
function classificarAnimal(animal) {
    // Converte o nome do animal para minúsculas para facilitar a comparação
    animal = animal.toLowerCase();

    switch (true) {
        case /cachorro|gato|elefante|tigre|leão/.test(animal):
            console.log("Classificação: Mamífero");
            break;
        case /aguia|papagaio|pato|andorinha|peru/.test(animal):
            console.log("Classificação: Ave");
            break;
        case /jacaré|iguana|cobra|lagarto|tartaruga/.test(animal):
            console.log("Classificação: Réptil");
            break;
        case /rã|sapo|salamandra|cerca|axolote/.test(animal):
            console.log("Classificação: Anfíbio");
            break;
        case /tubarão|sardinha|salmão|atum|cavala/.test(animal):
            console.log("Classificação: Peixe");
            break;
        default:
            console.log("Classificação desconhecida");
    }
}


function solicitarEntrada() {
    const prompt = require('prompt-sync')();
    const animal = prompt("Digite o nome de um animal: ");
    classificarAnimal(animal);
}


solicitarEntrada();
