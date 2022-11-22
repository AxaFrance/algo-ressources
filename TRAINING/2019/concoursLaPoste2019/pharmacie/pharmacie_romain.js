export default (input) => {

  const N = +input.shift();

  let cross = "";
  cross += ([...Array(N-1).fill('.'), ...Array(N).fill('X'), ...Array(N-1).fill('.')]).join('') + " ";
  for (let i = 0; i < N-2; i++ ) cross += ([...Array(N-1).fill('.'), 'X', ...Array(N-2).fill('.'), 'X', ...Array(N-1).fill('.')]).join('') + " ";

  cross += ([...Array(N).fill('X'), ...Array(N-2).fill('.'), ...Array(N).fill('X')]).join('') + " ";
  for (let i = 0; i < N-2; i++ ) cross += ([ 'X', ...Array(3*N-2-2).fill('.'), 'X']).join('') + " ";
  cross += ([...Array(N).fill('X'), ...Array(N-2).fill('.'), ...Array(N).fill('X')]).join('') + " ";

  for (let i = 0; i < N-2; i++ ) cross += ([...Array(N-1).fill('.'), 'X', ...Array(N-2).fill('.'), 'X', ...Array(N-1).fill('.')]).join('') + " ";
  cross += ([...Array(N-1).fill('.'), ...Array(N).fill('X'), ...Array(N-1).fill('.')]).join('');
  
  return cross;
};