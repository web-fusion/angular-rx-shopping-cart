import * as _ from 'lodash';
import { getMessage } from '../src/index';

describe('testing app', () => {
    it('get message', () => {
        _.map(_.range(10), (i) => console.log(i));
        expect(getMessage()).toEqual('Hello World');
    });
});
