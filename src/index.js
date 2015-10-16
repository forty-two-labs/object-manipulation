const removeNestedKey = (obj, nestedKey) => {
  if (typeof nestedKey === 'undefined') {
    throw new Error('Specify nestedKey in format x.y' );
  }

  const newObj = {...obj};
  const keys = nestedKey.split('.');
  let ref = newObj;

  for (const i in keys) {
    if (i < keys.length - 1) {
      ref = ref[keys[i]];
    } else {
      delete ref[keys[i]];
    }
  }
  return newObj;
};

const denormalizedObjectToArray = normalizedObj => Object.keys(normalizedObj).sort().map(id => normalizedObj[id]);

export default {
  removeNestedKey,
  denormalizedObjectToArray
};
