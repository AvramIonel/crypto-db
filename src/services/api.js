import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: { Accept: "application/json" },
});

// {vs_currency: 'eur'}
const buildParams = (params) => {
  if (params === undefined) return "";
  // console.log(params);
  const arr = [];
  Object.keys(params).forEach((k) => {
    if (params[k] !== undefined) arr.push(`${k}=${params[k]}`);
  });
  return "?" + arr.join("&");
  // return "?vs_currency=eur&per_page=10";
};
// TODO reqParams to be array
const validateParams = (params, reqParams) => {
  let isValid = params !== undefined;
  if (params) {
    const paramsArray = Object.keys(params);
    // console.log(paramsArray);
    // isValid = paramsArray.includes("vs_currency");
    reqParams.forEach((rp) => {
      if (!paramsArray.includes(rp)) {
        isValid = false;
      }
    });
  }
  return isValid;
};

export const getCoinsMarket = async (params) => {
  const isValid = validateParams(params, ["vs_currency"]);
  // console.log(isValid);

  if (isValid) {
    const parsedParams = buildParams(params);
    // console.log(parsedParams)
    try {
      const res = await instance.get(`/coins/markets${parsedParams}`);
      return { data: res.data };
      // console.log(res.data);
    } catch (error) {
      return { error };
    }
  } else {
    return {
      error: "Invalid call parameters",
    };
  }
};

/*
params = {
  id: 'eur
  market_data: true
}
*/

export const getCoinDetails = async (subUrl, params) => {
  // const isValid = validateParams(params, ["id"]);
  // console.log(isValid);

  if (subUrl) {
    const parsedParams = buildParams(params);
    // console.log(parsedParams)
    try {
      const res = await instance.get(`/coins/${subUrl}${parsedParams}`);
      return { data: res.data };
      // console.log(res.data);
    } catch (error) {
      return { error };
    }
  } else {
    return {
      error: "Invalid call parameters",
    };
  }
};
