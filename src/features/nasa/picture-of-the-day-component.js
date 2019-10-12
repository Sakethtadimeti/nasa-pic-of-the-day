import React, { Component } from "react";
import moment from "moment";
import { getPictureOfTheDay } from "../../services/nasa-services";
import { get } from "../../common/imports/lodash-imports";
import "./picture-of-the-day.scss";

class PictureOfTheDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      explanation: "",
      hdurl: "",
      url: ""
    };
  }

  componentDidMount() {
    const { date } = this.props;
    getPictureOfTheDay({ hd: true, date }).then(response => {
      console.log();
      const { title = "", explanation = "", hdurl = "", url = "" } = get(
        response,
        ["body"]
      );
      this.setState({ title, explanation, hdurl, url });
    });
  }

  render() {
    const { title = "", explanation = "", hdurl = "" } = this.state;
    const { date } = this.props;

    return (
      <div className="picture-of-the-day">
        <h1>{title}</h1>
        <p className="date-label">{`Date: ${moment(date).format(
          "Do MMM YYYY"
        )}`}</p>
        <img src={hdurl} alt={"Nasa of the day"} />
        <p>{explanation}</p>
      </div>
    );
  }
}

export default PictureOfTheDay;
