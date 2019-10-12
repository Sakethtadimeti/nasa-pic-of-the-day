import React, { Component } from "react";
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

    return (
      <div className="picture-of-the-day">
        <h1>{title}</h1>
        <img src={hdurl} alt={"Nasa of the day"} />
        <p>{explanation}</p>
      </div>
    );
  }
}

export default PictureOfTheDay;
