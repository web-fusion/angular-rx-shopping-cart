import { map, range } from 'lodash';

export let getMessage = (): string => {
    map(range(10), (i): void => { console.log(i) });
    return 'Hello World';
};
