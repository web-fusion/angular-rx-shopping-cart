import { a } from '../src/a.js';

describe('testing app', () => {
  it('get message', () => {
    expect(a()).toEqual('Hello World');
  });
});
