/** Normalise un numéro FR vers 10 chiffres commençant par 0 */
export function normalizeFrPhone(input: string): string {
  let digits = input.replace(/\D/g, "");
  if (digits.startsWith("33") && digits.length === 11) {
    digits = `0${digits.slice(2)}`;
  }
  if (digits.startsWith("0033") && digits.length === 13) {
    digits = `0${digits.slice(4)}`;
  }
  return digits;
}

export function isValidFrPhone(input: string): boolean {
  return /^0[1-9]\d{8}$/.test(normalizeFrPhone(input));
}

export const PHONE_ERROR_MSG = "Numéro à 10 chiffres (ex. 06 12 34 56 78)";
