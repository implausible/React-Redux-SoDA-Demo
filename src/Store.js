import { createStore } from 'redux';

import * as Constants from './Constants';

const init = () => ({
  view: Constants.view.COMPONENT
});

export default createStore((state = init(), action) => {
  switch (action.type) {
    case Constants.action.CHANGE_VIEW: return {
      ...state,
      view: action.nextView
    };

    default: return state;
  }
});
