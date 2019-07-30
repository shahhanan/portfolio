import * as types from "../constants/actionTypes";

export function loadResponsiveAlertSuccess(text) {
    return { type: types.GET_ALERT_SUCCESS, text };
}
export function removeResponsiveAlertSuccess(text) {
  return { type: types.GET_ALERT_SUCCESS, text };
}
export function snoozeAlertAction(alert) {  
   return {type: types.SNOOZE_ALERT_SUCCESS, alert}
}
export function dismissAlertAction(alert) {  
    return {type: types.DISMISS_ALERT_SUCCESS, alert}
}

export function loadResponsiveAlerts() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    dispatch(loadResponsiveAlertSuccess(ResponsiveTextMock));
  /*   return AlertApi.getAlertByUserId()
      .then(alerts => {
         
        dispatch(loadResponsiveAlertSuccess(alerts.data));
      })
      .catch(error => {
        throw error;
      }); */
  };
}

export function removeResponsiveAlerts(){
  return function(dispatch){
    dispatch(removeResponsiveAlertSuccess(""));
  }
} 

export function removeAlert(alert) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
        dispatch(snoozeAlertAction(alert));
  };
}

export function dismissAlert(alert) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  /* return function(dispatch) {
   
    var a=alert;
       return AlertApi.dismissAlertById(alert.id)
      .then(response => {
       
         dispatch(snoozeAlertAction(a));
      })
      .catch(error => {
        throw error;
      });
     
  }; */
}

const ResponsiveTextMock = "This Application Is not Fully Responsive yet and is still under Development";
