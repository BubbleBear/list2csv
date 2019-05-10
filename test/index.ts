import list2csv from '../src/index';

const list = [
    {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
    },
    {
        a: 6,
        b: 7,
        c: 8,
        d: 9,
    },
    {
        a: 11,
        b: 21,
        c: 31,
        d: 41,
    },
    {
        a: 12,
        b: 22,
        c: 32,
        d: 42,
    },
];

const csv1 = list2csv(list);

console.log(csv1);

const map = new Map();
map.set('a', 'asdf').set('b', 'bsdf').set('c', 'csdf').set('d', 'dsdf');

const csv2 = list2csv(list, map);

console.log(csv2);
