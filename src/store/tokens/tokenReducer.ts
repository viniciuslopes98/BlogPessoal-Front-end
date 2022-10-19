import { Action } from "./action";

export interface TokenState{
    tokens: string
}

const initialState = {
    tokens:""
}

export const tokensReducer = (state: TokenState = initialState, action: Action) => {
    switch(action.type){
        case "ADD_TOKEN": {
            return{tokens: action.payload}
        }
        default: return state
    }

}