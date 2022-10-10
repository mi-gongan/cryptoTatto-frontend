export function makeShortAddress(address: string): string {
  const left = address.slice(0, 6);
  const right = address.slice(-4);
  return left + "..." + right;
}

export function makeFormattedNumber(num: number): string {
  return num.toLocaleString("en-US");
}
