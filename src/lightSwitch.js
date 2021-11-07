function switchPositino(date) {
  // let currDate = new Date.now();
  let hour = date.getUTCHours();
  // console.log(hour);
  if (hour <= 7 || hour >= 18) {
    return "A";
  } else {
    return "S";
  }
}

export default switchPositino;
