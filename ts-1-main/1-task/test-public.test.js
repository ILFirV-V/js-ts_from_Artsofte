import { strict as assert } from 'assert';
import { normalize } from './task.js';

export const simpleTest = () => {
  const firstString = normalize(20, 'количество баллов');
  const secondString = normalize('количество баллов', 20);

  assert.equal(firstString === 'количество баллов 20' && secondString === 'количество баллов 20', true)
}
