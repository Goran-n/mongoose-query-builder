import {clone} from 'lodash';

export const inQuery = (q) => {
  return q ? {$in: q} : undefined;
};
export const neQuery = (q) => {
  return q ? {$ne: q} : undefined;
};
export const lteQuery = (q) => {
  return q ? {$lte: q} : undefined;
};
export const gteQuery = (q) => {
  return q ? {$gte: q} : undefined;
};

export const objectQuery = (q = {}) => {
  if (Object.entries(q).length > 0) {
    return q;
  }
  return undefined;
};

export const validateQuery = (q = {}) => {
  const obj = clone(q);

  Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key]);

  return obj;
};

export const formPaginationOptions = (q = {}) => {
  return {
    'limit': q.limit || 25,
    'page': q.page || 1,
  };
};

export const nestedQuery = (q = {}, nest) => {
  const query = {};

  Object.entries(q).forEach(([key, value]) => {
    query[`${nest}.${key}`] = value;
  });

  return query;
};
