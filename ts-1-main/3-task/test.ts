type CommandType = {
  type: "INCREMENT" | "DECREMENT" | "NULL";
}

function execCreator() {
  let state = 0;
  return function (command: CommandType) {
    switch (command.type) {
      case 'INCREMENT': {
        state += 1;
        break;
      }
      case 'DECREMENT': {
        state -= 1;
        break;
      }
      case 'NULL': {
        state = 0;
        break;
      }
    }
  }
}

export const exec = execCreator();