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

export function nano(
  strs: TemplateStringsArray,
  ...temps: NanoTemplate[]
): string {
  return temps.reduce<string>((str, t, i) => str + c(t) + strs[i + 1], strs[0]);
}

export default nano;
