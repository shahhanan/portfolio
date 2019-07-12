import * as types from "../constants/actionTypes";
import AlertApi from "../api/AlertApi";

export function loadAlertSuccess(alerts) {
    return { type: types.GET_ALERT_SUCCESS, alerts };
}
export function snoozeAlertAction(alert) {  
   return {type: types.SNOOZE_ALERT_SUCCESS, alert}
}
export function dismissAlertAction(alert) {  
    return {type: types.DISMISS_ALERT_SUCCESS, alert}
}

export function loadAlerts() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return AlertApi.getAlertByUserId()
      .then(alerts => {
         
        dispatch(loadAlertSuccess(alerts.data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function removeAlert(alert) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
  
        dispatch(snoozeAlertAction(alert));
     
  };
}

export function dismissAlert(alert) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
   
    var a=alert;
       return AlertApi.dismissAlertById(alert.id)
      .then(response => {
       
         dispatch(snoozeAlertAction(a));
      })
      .catch(error => {
        throw error;
      });
     
  };
}