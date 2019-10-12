import moment from "moment";

export function getDates(startDate, stopDate) {
  let dateArray = [];
  let currentDate = moment(startDate);

  while (currentDate <= moment(stopDate)) {
    dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
    currentDate = moment(currentDate).add(1, "days");
  }
  return dateArray;
}
