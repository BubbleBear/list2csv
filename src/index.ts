export default function list2csv(list: any[], map?: object | Map<any, any>) {
    let headerMap: Map<any, any> | undefined;

    if (map && map instanceof Map === false) {
        headerMap = new Map(Object.entries(map));
    } else {
        headerMap = map as Map<any, any>;
    }

    const collumns = headerMap && Array.from(headerMap.keys()) || Object.keys(list[0] || {});

    const header = collumns.map(v => `"${headerMap ? headerMap.get(v) : v}"`).join(',');

    const content = list.reduce((acc, cur) => {
        acc += collumns.map(key => `"${cur[key]}"`).join(',');
        acc += '\r\n';

        return acc;
    }, '');

    return header + '\r\n' + content;
}
