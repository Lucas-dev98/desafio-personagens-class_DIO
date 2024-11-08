// Importa as classes (ajuste de acordo com seu sistema de módulos)
const Mago = require('./Mago');
const Guerreiro = require('./Guerreiro');
const Monge = require('./Monge');
const Ninja = require('./Ninja');

function arena() {
    const heroi1 = new Mago("Merlin", 150);
    const heroi2 = new Guerreiro("Arthas", 35);

    console.log("Batalha Iniciada!");
    heroi1.atacar();
    heroi2.atacar();

    // Aqui você pode expandir com uma lógica para simular ataques e resultados
}

arena();
