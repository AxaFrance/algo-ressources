input.shift();
const replaceWhile = (string, regex, toReplace) => (regex.test(string) ? replaceWhile(string.replace(regex, toReplace), regex, toReplace) : string);
return input
  .map(
    (S, index) =>
      `Case #${index + 1}: ${replaceWhile(
        S.split("")
          .map((D) => `${"(".repeat(D)}${D}${")".repeat(D)}`)
          .join(""),
        /\)\(/g,
        ""
      )}`
  )
  .join("\n");
