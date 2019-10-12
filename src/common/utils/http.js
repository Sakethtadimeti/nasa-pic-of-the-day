import { get, isEmpty, isEqual } from "../imports/lodash-imports";
import apiUrls from "../../config/api-end-points";
import { POST, GET } from "../../constants/http-constants";

import queryString from "query-string";

const checkStatus = response => {
  return response.json();
};

const parseJSON = response => ({ body: response, success: true });

export function fetchJSON(
  url,
  method = POST,
  headerOptions = {},
  body = false
) {
  const options = {
    method,
    headers: {
      ...headerOptions
    }
  };

  if (body && method !== GET) {
    options.body = JSON.stringify(body);
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

export const getUrl = routeName => apiUrls[routeName];

export const isSuccess = response => get(response, "success");

export const addQueryParams = ({ url, method, body }) => {
  if (!isEmpty(body) && isEqual(method, GET)) {
    const newUrl = url.concat("&");

    return newUrl.concat(queryString.stringify(body));
  }

  return url;
};
