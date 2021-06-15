const add = (num) => {

  let sum = num;
  const inner = (val) => {
    sum += val;
    return inner;
  }
  inner.valueOf = () => {
    return sum;
  }
  return inner;
}

console.log(add(1)(2)(3).valueOf);