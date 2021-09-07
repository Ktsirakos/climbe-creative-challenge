export function getColumnFromCharacter(value: string): number {
  const availableCharacters = ["A", "B", "C", "D", "E", "F", "G"];
  return availableCharacters.indexOf(value);
}
