function Algo() {}

Algo.prototype.reverse = function(str) {
  return str.split('').reverse().join('')
};

Algo.prototype.isPalindrome = function(str) {
  const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

Algo.prototype.capitalize = function(str) {
  return str.split(" ").map(word => {
    // For each word, we convert the first character to upper case
    return word.substring(0, 1).toUpperCase() + word.substring(1);
    // We convert the new array into a string.
  }).join(" ");
};

module.exports = Algo;
