import { isNil, isEmpty } from "lodash";

const localStorage = window.localStorage;

export const setValuesToStorage = (key, values) => {
  localStorage.setItem(key, JSON.stringify(values));
};

export const getValuesFromStorage = key => {
  let _valuesString = localStorage.getItem(key);
  let _valuesObj = {};
  if (isNil(_valuesString)) {
    return _valuesObj;
  } else {
    try {
      _valuesObj = JSON.parse(_valuesString);
    } catch (e) {
      console.log(e);
    }
    return _valuesObj;
  }
};

export const deleteValuesInStorage = key => {
  localStorage.removeItem(key);
};