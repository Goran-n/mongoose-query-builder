import {clone, isArray, isEmpty} from 'lodash';
import {Types} from 'mongoose';

export const ninQuery = (q) => {
  return q ? {$nin: q} : undefined;
};
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

/**
 * Converts an array of Strings to Mongoose ObjectIds
 * @param {Array} arr
 * @return {Array} []
 */
export const objectIdArray = (arr) => {
  if (!isArray(arr) || isEmpty(arr)) {
    return null;
  }
  return arr.map((elm) => new Types.ObjectId(elm));
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
