let deck1 = [];
let deck2 = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

// Función para crear los mazos de cartas
const crearDecks = () => {
    deck1 = [];
    deck2 = [];
    
    // Agregar cartas del 2 al 10 para cada tipo al primer mazo (deck1)
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck1.push(i + tipo);
        }
    }
    // Agregar cartas especiales para cada tipo al primer mazo (deck1)
    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck1.push(esp + tipo);
        }
    }
    
    // Barajar el primer mazo (deck1)
    shuffle(deck1);

    // Copiar el primer mazo barajado al segundo mazo (deck2)
    deck2 = [...deck1];

    // Barajar el segundo mazo (deck2)
    shuffle(deck2);

    console.log("Mazo del jugador 1:");
    console.log(deck1);
    console.log("\nMazo del jugador 2:");
    console.log(deck2);
}

// Implementación del algoritmo Fisher-Yates para barajear un arreglo
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

crearDecks();

// Función para pedir una carta del mazo (solo para ejemplo)
const pedirCarta = (jugador) => {
    let carta;
    if (jugador === 1) {
        carta = deck1.pop();
        console.log(`\nCarta para jugador ${jugador}: ${carta}`);
    } else if (jugador === 2) {
        carta = deck2.pop();
        console.log(`\nCarta para jugador ${jugador}: ${carta}`);
    } else {
        console.warn('Número de jugador inválido');
    }
    return carta;
}

// Ejemplo de uso de la función pedirCarta
pedirCarta(1); // Jugador 1 recibe una carta
pedirCarta(2); // Jugador 2 recibe una carta
