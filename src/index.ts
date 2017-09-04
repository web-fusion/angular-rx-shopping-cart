import * as _ from 'lodash';

export let getMessage = (): string => {
    _.map(_.range(10), (i): void => { console.log(i) });
    return 'Hello World';
};
