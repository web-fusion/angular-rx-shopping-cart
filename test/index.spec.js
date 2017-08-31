import { getMessage } from '../src/index.js';

describe('testing app', () => {
  it('get message', () => {
    expect(getMessage()).toEqual('Hello World');
  });
});
