import * as types from "../constants/actionTypes";
/* import mock from "../feedbackMock";
 */
export function GetFeedbackDataSuccess(mock) {
    return { type: types.GET_FEEDBACK_DATA, mock };
}


export function GetFeedbackData() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    dispatch(GetFeedbackDataSuccess(mock));
    /* return AlertApi.getAlertByUserId()
      .then(alerts => {
        dispatch(loadAlertSuccess(alerts.data));
      })
      .catch(error => {
        throw error;
      }); */
  };
}

const mock = [{
    "Name": "Berenice Ilson",
    "Feedback": {
      "Design": 7.3, 
      'Performance': 4.9, 
      "Responsive": 7.4
    }
  }, {
    "Name": "Sabina Burkill",
    "Feedback": {
      "Design": 7.3, 
      'Performance': 4.9, 
      "Responsive": 7.4
    }
  }, {
    "Name": "Dyanna Vasilechko",
    "Feedback": {
      "Design": 7.3, 
      'Performance': 4.9, 
      "Responsive": 7.4
    }
  }, {
    "Name": "Emanuel Brecknall",
    "Feedback": {
      "Design": 7.3, 
      'Performance': 4.9, 
      "Responsive": 7.4
    }
  }, {
    "Name": "Carolus Grimmer",
    "Feedback": {
      "Design": 7.3, 
      'Performance': 4.9, 
      "Responsive": 7.4
    }
  }, {
    "Name": "Devonna Magrane",
    "Feedback": {
      "Design": 7.3, 
      "Responsive": 7.4
    }
  }, {
    "Name": "Othella Goodlad",
    "Feedback": {
      "Design": 7.3, 
      'Performance': 4.9, 
      "Responsive": 7.4
    }
  }, {
    "Name": "Dulcy Astridge",
    "Feedback": {
      "Design": 7.3, 
      "Responsive": 7.4
    }
  }, {
    "Name": "Shelia Lammie",
    "Feedback": {
      "Responsive": 7.4
    }
  }, {
    "Name": "Adams Murden",
    "Feedback": {
      "Design": 7.3, 
      'Performance': 4.9, 
    }
  },{
    "Name": "Berenice Ilson",
    "Feedback": {
      "Design": 7.3, 
      'Performance': 4.9, 
      "Responsive": 7.4
    }
  }, {
    "Name": "Sabina Burkill",
    "Feedback": {
      "Design": 7.3, 
      'Performance': 4.9, 
      "Responsive": 7.4
    }
  }, {
    "Name": "Dyanna Vasilechko",
    "Feedback": {
      "Design": 7.3, 
      'Performance': 4.9, 
      "Responsive": 7.4
    }
  }, {
    "Name": "Emanuel Brecknall",
    "Feedback": {
      "Design": 7.3, 
      'Performance': 4.9, 
      "Responsive": 7.4
    }
  }];