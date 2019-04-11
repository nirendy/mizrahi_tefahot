const converter = {
  fromIsraeliToAbroad: israeliNumber => {
    if (israeliNumber == undefined) return undefined;

    return israeliNumber.replace("0", "+972");
  },
  fromAbroadToIsraeli: numberAbroad => {
    console.log(`Number abroad: ${numberAbroad}`);
    if (numberAbroad == undefined) return undefined;

    return numberAbroad.replace("+972", "0");
  }
};

module.exports = converter;
