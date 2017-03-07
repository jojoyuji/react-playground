import Immutable from 'immutable';

const initialState = {
 isMenuOpen: false,
};

export default function reducer(state = initialState, action
) {
  state = Immutable.fromJS(state);

  switch (action.type) {
    case 'TOGGLE_MENU': {
      return state.set('isMenuOpen', !state.get('isMenuOpen')).toJS();
    }
    default:
      break;
  }
  return state.toJS();
}
