import { combineReducers} from 'redux';
import auth_reducer from './auth_reducer';
import app_reducer from './app_reducer';


export default combineReducers({
    auth: auth_reducer,
    app: app_reducer
})


// multiple reducer k liye sare reducer ko ek file mai import krwa kr 
// ek name assign krnge as a obj then us name se pure app mai jhan call
//  krna hga us name se call krnge jo assign kya hai 
