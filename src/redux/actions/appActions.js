import * as constants from '../constants'

export const sendNamePropAction = (nameProp) => {
    debugger;
    return {
        type: constants.CHANGE_NAME,
        payload: nameProp,
        }
    }

export const sendAgePropAction = (ageProp) => {
    return {
            type: constants.CHANGE_AGE,
            payload: ageProp,
        }
    }

export const sendSkillsPropAction = (skillsProp) => {
    return {
        type: constants.CHANGE_SKILLS,
        payload: skillsProp
    }
}

export const sendColorPropAction = (colorProp) => {
    return {
        type: constants.CHANGE_COLOR,
        payload: colorProp
    }
}