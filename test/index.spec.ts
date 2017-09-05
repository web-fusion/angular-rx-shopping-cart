import { map, range } from 'lodash';
import { getMessage } from '../src/index';

describe('testing app', () => {
    it('get message', () => {
        map(range(10), (i): void => { console.log(i) });
        expect(getMessage()).toEqual('Hello World');
    });
});
