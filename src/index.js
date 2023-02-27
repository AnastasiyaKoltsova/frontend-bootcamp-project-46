import fs from 'fs';
import path from 'path';
import _ from 'lodash'

const genDiff = (data1, data2) => {
    const keys1 = _.keys(data1);
    const keys2 = _.keys(data2);
    const keys = _.sortBy(_.union(keys1, keys2));
    
    const result = keys.map((key) => {
        if (!_.has(data1, key)) {
            return { 
                key, 
                value: data2[key], 
                type: 'added', 
            };
        }
        if (!_.has(data2, key)) {
            return { 
                key, 
                value: data1[key], 
                type: 'deleted', 
            };
        }
        if (_.isObject(data1[key]) && _.isObject(data2[key])) {
            return {
                key, 
                type: 'nested',
                children: genDiff (data1[key], data2[key]),
            };
        }
        if (data1[key] !== data2[key]) {
            return {
                key, 
                valueBefore: data1[key],
                valueAfter: data2[key], 
                type: 'changed', 
            };
        }
        return {
            key,
            value: data1[key],
            type: 'unchanged'
        };
    });

    const symbols = {
        added: '+',
        deleted: '-',
        unchanged: ' ',
        nested: ' ',
    };

    const makeString = result.map((line) => {
        switch (line.type) {
            case 'added':
                return `  + ${line.key}: ${line.value}`;
            case 'deleted': 
                return `  - ${line.key}: ${line.value}`;
            case 'unchanged':
                return `    ${line.key}: ${line.value}`;
            case 'changed':
                return (`  - ${line.key}: ${line.valueBefore}\n  + ${line.key}: ${line.valueAfter}`);
        }
    });
    makeString.unshift('{');
    makeString.push('}');
    const makeJoin = makeString.join('\n');
    return makeJoin;
};


export default (filepath1, filepath2) => {

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);
const data1 = fs.readFileSync(getAbsolutPath(filepath1), 'utf-8');
const data2 = fs.readFileSync(getAbsolutPath(filepath2), 'utf-8');
// const getFormat = (filename) => filename.split('.')[1];

const dataParse1 = JSON.parse(data1);
const dataParse2 = JSON.parse(data2);
return genDiff(dataParse1, dataParse2);
};