const endsWith = word => word[word.length-1];
const getCandidates = (words, used) => words.filter(e => !used.includes(e));
const buildLookup = words => {
  const lookup = new Map();
  words.forEach(e => {
    const start = e[0];
    lookup.set(start, [...(lookup.get(start) || []), e]); }); 
    return lookup; 
};
const findLongestChain = names => {
  const lookup = buildLookup(names);
  let maxNum = 0, maxPaths = [];
  const parseResult = arr => {
    if (typeof arr[0] == 'object') {
      arr.forEach(el => parseResult(el));
    } else {
      if (arr.length > maxNum) {
        maxNum = arr.length;
        maxPaths = [arr];
      }
      if (arr.length == maxNum) { maxPaths.push(arr); }
  } };
  const searchWords = (word, res) => {
    const cs = getCandidates(lookup.get(endsWith(word)) || [], res);
    return cs.length ? cs.map(e => searchWords(e, [...res, e])) : res;
  };
  names.forEach(word => {
    const res = searchWords(word, [word]);
    parseResult(res);
}); 
  console.log(`Max Path: ${maxNum}`);
  console.log(`Matching Paths: ${maxPaths.length}\n`);
};

const chain1 = ["certain", "each", "game", "involves", "starting", "with","word"], 
    chain2 = ["audino", "bagon", "kangaskhan", "banette", "bidoof", "braviary", "exeggcute", "yamask"], 
    chain3 = ["harp", "poliwrath", "poochyena", "porygon2", "porygonz", "archana"], 
    chain4 = ["scolipede", "elephant", "zeaking", "sealeo", "silcoon", "tigers"], 
    chain5 = ["loudred", "lumineon", "lunatone", "machamp", "magnezone", "nosepass", "petilil", "pidgeotto", "pikachu"];
	
findLongestChain(chain1);    
findLongestChain(chain2);
findLongestChain(chain3);
findLongestChain(chain4);
findLongestChain(chain5);