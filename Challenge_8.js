/*
The elves are very busy in Santa Claus' workshop organizing gifts 🎁 for Christmas Eve 🎄.

The input format is special, as it indicates the number of gifts and the type of gift with letters from a to z. For example, '66a11b' means 66 a gifts and 11 b gifts.

The elves have a special system for organizing the gifts:

Every 10 gifts of the same type are packed in a box, represented by {x}. For example, 20 type a gifts are packed in two boxes like this: {a}{a}.
Every 5 boxes are stacked on a pallet, represented by [x]. For example, 10 a boxes are stacked on 2 pallets in this way: [a][a]
Any additional gift is placed in a bag, represented by () and all of them are placed inside. For example, 4 b gifts are placed in a bag like this (bbbb)
The gifts are then placed in the following order: pallets, boxes and bags. And the gifts appear in the same order as the input string.

Your task is to write a function organizeGifts that takes a string of gifts as an argument and returns a string representing the warehouse.

const result1 = organizeGifts('76a11b')
console.log(result1)
// `[a]{a}{a}(aaaaaa){b}(b)`

Explanation:

  76a: 76 gifts type 'a' would be packed in 7 boxes and 6 gifts would be left, resulting in 1 pallet [a] (for the first 5 boxes), 2 loose boxes {a}{a} and a bag with 6 gifts (aaaaaa)

  11b: 11 gifts type 'b' would be packed in
*/

function organizeGifts(gifts) {
  const matches = gifts.match(/(\d*\w)/g);

  if (!matches) {
    return gifts;
  }

  for (const match of matches) {
    let count = Number(match.slice(0, -1));
    let gift = match.at(-1);

    const palets = Math.floor(count / 50);

    count -= palets * 50;
    const boxes = Math.floor(count / 10);
    count -= boxes * 10;

    const palentsText = palets ? `[${gift}]`.repeat(palets) : '';
    const boxesText = boxes ? `{${gift}}`.repeat(boxes) : '';
    const bagsText = count ? `(${gift.repeat(count)})` : '';

    gifts = gifts.replace(match, `${palentsText}${boxesText}${bagsText}`);
  }

  return gifts;
}

const result1 = organizeGifts('76a11b');
console.log(result1);
