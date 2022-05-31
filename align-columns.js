/*break up each string by '$'. The assumption is that the user wants the trailing $.*/
const testText = [
  "Given$a$text$file$of$many$lines,$where$fields$within$a$line$",
  "are$delineated$by$a$single$'dollar'$character,$write$a$program",
  "that$aligns$each$column$of$fields$by$ensuring$that$words$in$each$",
  "column$are$separated$by$at$least$one$space.",
  "Further,$allow$for$each$word$in$a$column$to$be$either$left$",
  "justified,$right$justified,$or$center$justified$within$its$column."
];
let formatText = (input, justification) => {
 /*Assuming here that any leading or trailing delimiters are wanted.*/
  input = input.map(r => r.split('$'));
  const COLWIDTH = getColumnWidths(input);
  let justifiedText = ''; /* Iterate through each row and add
  padding according to each column width.*/
  for(let r in input) {
    if(r > 0) { justifiedText += '\n'; }
    for(let c in input[r]) {
      const WORD = input[r][c];
      const PADDING = 1 + COLWIDTH[c] - WORD.length;
      if(justification == 'left') {
        justifiedText += `${WORD} ${''.repeat(PADDING)} `;
      } else if (justification == 'right') {
        justifiedText += `${' '.repeat(PADDING - 1)}${WORD} `;
      } else if (justification == 'center') {
        justifiedText += `${' '.repeat(Math.floor(PADDING/2))}${WORD}${' '.repeat(Math.ceil(PADDING/2))} `;
    }
    /*end of col foreach loop checker.*/ }
  /*end of row input foreach loop check.*/ }
  return justifiedText;
};
const getColumnWidths = (textArray) => {
  let colWidths = [];
  textArray.forEach(r => {
    if (r.length > colWidths.length) {
      colWidths = colWidths.concat(
      new Array(r.length - colWidths.length).fill(0) );
    }
    for(let c in r) {
       if(r[c].length > colWidths[c]) { colWidths[c] = r[c].length; }
    } /*end of foreach loop.*/ });
  return colWidths;
};
console.log(`${formatText(testText, 'right')}`)