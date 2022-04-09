function searchCar(arr, c) {
  // let res = arr.includes(c);
  // return res;
  let found = 0;
  arr.forEach((element) => {
    let compRes = element
      .toString()
      .localeCompare(c.toString(), undefined, { sensitivity: "base" });
    console.log("====>>>>", element.toString(), c.toString(), compRes);
    // console.log("c.toString", c.toString());
    // console.log("compRes", compRes);
    if (compRes == 0) found = 1;
  });
  return found;
}

export default searchCar;
