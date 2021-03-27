function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;
  if (array1.length && !array2.length) return false;

  for (const i in array1) {
    const val = Math.pow(i, 2);
    const pos = array2.indexOf(val);
    if (pos) {
      array2.pop(pos);
    }
  }
  return array2.length > 0;
}
