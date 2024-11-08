class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.getAtaque()}`);
    }

    getAtaque() {
        return "um ataque básico"; // Substituído nas subclasses
    }
}

class Mago extends Heroi {
    constructor(nome, idade) {
        super(nome, idade, 'Mago');
    }

    getAtaque() {
        return "magia";
    }
}

class Guerreiro extends Heroi {
    constructor(nome, idade) {
        super(nome, idade, 'Guerreiro');
    }

    getAtaque() {
        return "espada";
    }
}

class Monge extends Heroi {
    constructor(nome, idade) {
        super(nome, idade, 'Monge');
    }

    getAtaque() {
        return "artes marciais";
    }
}

class Ninja extends Heroi {
    constructor(nome, idade) {
        super(nome, idade, 'Ninja');
    }

    getAtaque() {
        return "shuriken";
    }
}

module.exports = { Heroi, Mago, Guerreiro, Monge, Ninja };
