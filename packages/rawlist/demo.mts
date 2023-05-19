import rawlist, { Separator } from './src/index.mjs';

(async () => {
  let answer;

  answer = await rawlist({
    message: '(no keys) Conflict on `file.js`:',
    choices: [
      {
        name: 'Overwrite',
        value: 'overwrite',
      },
      {
        name: 'Overwrite this one and all next',
        value: 'overwrite_all',
      },
      {
        name: 'Show diff',
        value: 'diff',
      },
      new Separator(),
      {
        name: 'Abort',
        value: 'abort',
      },
    ],
  });
  console.log('Answer:', answer);

  answer = await rawlist({
    message: '(with keys) Conflict on `file.js`:',
    choices: [
      {
        key: 'y',
        name: 'Overwrite',
        value: 'overwrite',
      },
      {
        key: 'a',
        name: 'Overwrite this one and all next',
        value: 'overwrite_all',
      },
      {
        key: 'd',
        name: 'Show diff',
        value: 'diff',
      },
      new Separator(),
      {
        key: 'x',
        name: 'Abort',
        value: 'abort',
      },
    ],
  });
  console.log('Answer:', answer);
})();
