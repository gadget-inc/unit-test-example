export function getWordCount(text) {
  // very basic and possibly incorrect, split on spaces
  const splitText = text.split(" ");

  // handle an empty string as input
  if (splitText.length === 1 && !splitText[0]) {
    return 0;
  }

  return splitText.length;
}