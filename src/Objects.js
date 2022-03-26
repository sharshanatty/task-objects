export function personUpdate(data) {
    if (data.gender == 'female') {
        delete data.age;
        return data;
    }

    if (data.gender == 'male') {
        if (data.income == null) data.income = 100000;
        return data;
    }
}

export function objectFieldsList(obj1, obj2, obj3) {
    return Object.keys(obj1)
        .concat(Object.keys(obj2))
        .concat(Object.keys(obj3))
        .sort();
}

export function objectClone(obj, count) {
    let res = [];
    for (let i = 0; i < count; i++)
        res.push({ ...JSON.parse(JSON.stringify(obj)), id: i });
    return res;
}
