import { ParsedUrlQuery } from 'querystring';

type TQueryItem = string | string[];

export function getNumberFromQuery(item: TQueryItem, defaultValue?: number): number {
  let value;
  if (item as string) {
    value = item;
  } else if (item?.[0] as string) {
    value = item[0];
  } else {
    return defaultValue;
  }
  const number = Number(value);
  return isNaN(number) ? defaultValue : number;
}

export function setUndefinedWhenItemIsEmpty(query: ParsedUrlQuery) {
  const processedQuery = { ...query };
  for (const key in processedQuery) {
    if (processedQuery[key] === '') {
      processedQuery[key] = undefined;
    }
  }
  return processedQuery;
}
