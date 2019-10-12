import moment from "moment";

export function getDates(stopDate) {
  let dateArray = [];
  let currentDate = moment(stopDate).subtract(30, "days");

  while (currentDate <= moment(stopDate)) {
    dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
    currentDate = moment(currentDate).add(1, "days");
  }
  return dateArray;
}
