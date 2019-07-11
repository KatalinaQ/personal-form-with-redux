
import * as constants from '../constants'

const initialState = {
    nameProp: "",
    ageProp: "",
    skillsProp: "React",
    colorProp: "red"
}

export const appReducer = (state = initialState, action) => {
    switch(action.type){
        case constants.CHANGE_NAME: {
            return {
                ...state,
                nameProp: action.payload,
            }
        }

        case constants.CHANGE_AGE: {
            return {
                ...state,
                ageProp: action.payload,
            }
        }
        case constants.CHANGE_SKILLS: {
            return {
                ...state,
                skillsProp: action.payload,
            }
        }
        case constants.CHANGE_COLOR: {
            return {
                ...state,
                colorProp: action.payload,
            }
        }
        default:
            return state;
    }
    }