import { age, fn, gender, ln, midn, prof } from "./reducer";
import { combineReducers } from 'redux'


export const reducers = combineReducers({
    firstName: fn,
    lastName: ln,
    middleName: midn,
    Age: age,
    Gender:gender,
    Profession: prof

})