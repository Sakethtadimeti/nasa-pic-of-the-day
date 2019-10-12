import React from "react";
import PictureOfTheDay from "./picture-of-the-day-component";
import { map } from "../../common/imports/lodash-imports";
import { getDates } from "./nasa-utils";
import "./picture-of-the-day.scss";

const PictureOfDayList = () => {
  return (
    <div className="picture-of-day-list">
      {map(getDates("2019-09-12", new Date()), date => (
        <PictureOfTheDay date={date} key={date} />
      ))}
    </div>
  );
};

export default PictureOfDayList;
