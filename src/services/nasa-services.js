import { getUrl, fetchJSON, addQueryParams } from "../common/utils/http.js";
import { GET } from "../constants/http-constants.js";

export const getPictureOfTheDay = criteria => {
  const { hd, date } = criteria;
  const url = addQueryParams({
    url: getUrl("pictureOfTheDay"),
    method: GET,
    body: { hd, date }
  });

  return fetchJSON(url, GET, {}, {});
};
