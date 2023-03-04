import { type } from "os";
import { ClapButtonStateType } from "./ClapButton";

enum ClapButtonActionsEnum  {
    INC_COUNT = 'increase count',
    MARK_AS_CLICKED = 'click button'
}

interface ClapButtonActionI {
    type: ClapButtonActionsEnum
}

export const ClapButtonIncrement: ClapButtonActionI = {
    type: ClapButtonActionsEnum.INC_COUNT
}

export const ClapButtonMargClicked: ClapButtonActionI = {
    type: ClapButtonActionsEnum.MARK_AS_CLICKED
}

const reduceClapButtonState = (state: ClapButtonStateType, action: ClapButtonActionI) => {
    switch (action.type) {
        case ClapButtonActionsEnum.INC_COUNT:
            return {...state, count: state.count + 1, totalCount: state.totalCount + 1 }
        case ClapButtonActionsEnum.MARK_AS_CLICKED:
            return {...state, isClicked: true }
        default:
            return state;
    }
}

export default reduceClapButtonState;