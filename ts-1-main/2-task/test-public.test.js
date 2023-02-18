import { strict as assert } from 'assert';
import { Application, ConsoleLogger } from './task.js';

export const simple = () => {
  try {
    const app = new Application({ os: 'mac' }, new ConsoleLogger());
    app.start();
    assert.equal(true, true);
  } catch (e) {
    assert.equal(true, false);
  }
}
