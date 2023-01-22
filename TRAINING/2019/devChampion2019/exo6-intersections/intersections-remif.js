export default (input) => {
  input.shift();
  const [start, end] = input.shift().split(" ");
  input.shift();
  const grid = {};
  const lines = input.map(e => e.split(" "));
  lines.forEach((stops, i) => {
    stops.forEach(s => {
      grid[s] = [...(grid[s] || []), i];
    })
  });

  const target = grid[end];
  let min = Infinity;
  const calc = (lIndex, iter, tmp) => {
    if (iter < min && !tmp.includes(lIndex)) {
      const line = lines[lIndex];
      if (line.flatMap(e => grid[e]).some((ee) => target.includes(ee))) {
        return iter + 1;
      } else {
        const next = [...new Set(line.flatMap(e => grid[e]))].map(e => calc(e, iter + 1, [...tmp, lIndex]));
        min = Math.min(min, ...next.filter(e => e));
        return min;
      }
    } else {
      return min;
    }
  }
  grid[start].forEach((lIndex) => {
    if (grid[start].some(e => grid[end].includes(e))) {
      min = 1;
    } else {
      min = Math.min(min, calc(lIndex, 1, []));
    }
  })

  return min === Infinity ? -1 : min;
};
