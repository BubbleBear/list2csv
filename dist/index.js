"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function list2csv(list, map) {
    let headerMap;
    if (map && map instanceof Map === false) {
        headerMap = new Map(Object.entries(map));
    }
    else {
        headerMap = map;
    }
    const collumns = headerMap && Array.from(headerMap.keys()) || Object.keys(list[0] || {});
    const header = collumns.map(v => `"${headerMap ? headerMap.get(v) : v}"`).join(',');
    const content = list
        .map((item) => {
        return collumns.map(key => `"${item[key]}"`).join(',');
    })
        .join('\r\n');
    return header + '\r\n' + content;
}
exports.default = list2csv;
