export function cameliseObject(data: any):any {
  // ARRAY
  if (Array.isArray(data)) {
    return data.map(d => cameliseObject(d));
  }

  // OBJECT
  if (typeof data === 'object' && data !== null) {
    const fData:any = {};
    for (const [key, value] of Object.entries(data)) {
      const fKey = pascalCaseToCamelCase(key);
      const fValue = cameliseObject(value);
      fData[fKey] = fValue;
    }
    return fData;
  }

  return data;
}

function pascalCaseToCamelCase(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) {
      return '';
    }
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

export function fromStringToDate(data: any): any {
  return convert({ data, valueFn: stringToDate });
}

function stringToDate(data: any) {
  if (typeof data !== 'string') {
    return data;
  }
  const dateRegex = /\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\d|3[0-1])T(?:[0-1]\d|2[0-3]):[0-5]\d:[0-5]\d\.\d{3}Z/;
  return data.match(dateRegex) ? new Date(data) : data;
}

function convert({
  data,
  keyFn,
  valueFn
}: {
  data: any;
  keyFn?: (key: string) => any;
  valueFn?: (key: string) => any;
}): any {
  // ARRAY
  if (Array.isArray(data)) {
    return data.map(d => convert({ data: d, keyFn, valueFn }));
  }

  // OBJECT
  if (typeof data === 'object' && data !== null) {
    const obj:any = {};
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const prop = keyFn ? keyFn(key) : key;
        obj[prop] = convert({ data: data[key], keyFn, valueFn });
      }
    }
    return obj;
  }

  // Null, undefined, boolean, number, string, ...
  return valueFn ? valueFn(data) : data;
}
