function getStringLength(value) {
  const result = typeof value === 'string' ? value.length : 0;
  return result;
}

function isString(value) {
  const result = typeof value === 'string' || false;
  return result;
}

getStringLength();
isString();
