export type NanoTemplate =
  | string
  | number
  | { toString: () => string }
  | (() => NanoTemplate);

function c(temp: NanoTemplate): string {
  if (Array.isArray(temp)) return temp.map(c).join("");

  switch (typeof temp) {
    case "string":
      return temp;
    case "number":
      return "" + temp;
    case "function":
      return c(temp());
    case "object":
      return c(temp.toString());
  }
  throw TypeError("Unknown template type");
}

export function nano(strs: TemplateStringsArray, ...temps: NanoTemplate[]) {
  return strs.reduce((str, t, i) => str + t + c(temps[i]), "");
}

export default nano;
