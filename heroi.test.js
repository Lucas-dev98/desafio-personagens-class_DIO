const { Heroi, Mago, Guerreiro, Monge, Ninja } = require('./heroi');

describe("Testes das classes de heróis", () => {
    test("Mago ataca com magia", () => {
        const mago = new Mago("Gandalf", 100);
        expect(mago.getAtaque()).toBe("magia");
    });

    test("Guerreiro ataca com espada", () => {
        const guerreiro = new Guerreiro("Aragorn", 87);
        expect(guerreiro.getAtaque()).toBe("espada");
    });

    test("Monge ataca com artes marciais", () => {
        const monge = new Monge("Shaolin", 40);
        expect(monge.getAtaque()).toBe("artes marciais");
    });

    test("Ninja ataca com shuriken", () => {
        const ninja = new Ninja("Naruto", 17);
        expect(ninja.getAtaque()).toBe("shuriken");
    });
});
