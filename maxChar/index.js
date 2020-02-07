// Return the character most commonly used in the string.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

// function maxChar(str) {
//   const map = new Map();

//   for (let i = 0; i < str.length; i++) {
//     const element = str[i];

//     if (!map.get(element)) {
//       map.set(element, 1);
//     } else {
//       map.set(element, map.get(element) + 1);
//     }
//   }

//   let max = { result: "", value: 0 };

//   map.forEach((value, key) => {
//     if (value > max["value"]) {
//       max["result"] = key;
//       max["value"] = value;
//     }
//   });

//   return max["result"];
// }

function maxChar(str) {
  const map = new Map();
  let max = 0;
  let maxChar = "";

  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    const elementInMap = map.get(element);

    map.set(element, elementInMap + 1 || 1);

    if (elementInMap > max) {
      maxChar = element;
      max = elementInMap;
    }
  }

  return maxChar;
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Max Character", () => {
  it("maxChar() finds the most frequently used character", () => {
    assert.equal(maxChar("a"), "a");
    assert.equal(maxChar("test"), "t");
    assert.equal(maxChar("I loveeeeee noodles"), "e");
    assert.equal(maxChar("1337"), "3");
  });
});

mocha.run();
