// https://adventofcode.com/2023/day/4

// Input: https://adventofcode.com/2023/day/4/input
// var inputs = $("pre").innerText.trim().split("\n");

// --- Part One ---

// "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"

const getCardNumbers = (card) => {
    const [, numbers] = card.split(": ");
    const [win, yours] = numbers.split(" | ");

    return {
        win: win.split(" ").filter(Boolean).map(Number),
        yours: yours.split(" ").filter(Boolean).map(Number),
    };
};

export const getPoints = (card) => {
    const { win, yours } = getCardNumbers(card);

    return win.reduce((points, winNumber) => {
        if (yours.includes(winNumber)) {
            return points ? points * 2 : 1;
        }
        return points;
    }, 0);
};

export const getTotalPoints = (cards) => {
    return cards
        .map(getPoints)
        .reduce((a, b) => a + b);
};

// --- Part Two ---

const getCardId = (card) => {
    const [cardId] = card.split(": ");
    const [, id] = cardId.split("Card ");
    return Number(id);
};

const getCopy = (card) => {
    const id = getCardId(card);
    const { win, yours } = getCardNumbers(card);

    const matchNumber = win
        .filter(winNumber => yours.includes(winNumber))
        .length;
    
    return {
        id,
        copy: matchNumber,
    };
};

export const getTotalCopy = (cards) => {
    const copies = cards.map(getCopy);
    const cardList = cards.map(() => 1);

    copies.forEach(({ id, copy }) => {
        if (copy) {
            for (let i = 1; i <= copy; i++) {
                cardList[id - 1 + i] += cardList[id - 1];
            }
        }
    });

    cardList.length = cards.length;

    return cardList.reduce((a, b) => a + b);
};