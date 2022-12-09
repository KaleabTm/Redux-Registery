const initialState=" "

export const fn=(state=initialState,action)=>{
    switch(action.type){
        case "FNAME":
            return action.payload
        default:
            return state
    }
}

export const ln=(state=initialState,action)=>{
    switch(action.type){
        case "LNAME":
            return action.payload
        default:
            return state
    }
}

export const midn=(state=initialState,action)=>{
    switch(action.type){
        case "MIDNAME":
            return action.payload
        default:
            return state
    }
}

export const age=(state=initialState,action)=>{
    switch(action.type){
        case "AGE":
            return action.payload
        default:
            return state
    }
}

export const gender=(state=initialState,action)=>{
    switch(action.type){
        case "GENDER":
            return action.payload
        default:
            return state
    }
}

export const prof=(state=initialState,action)=>{
    switch(action.type){
        case "PRO":
            return action.payload
        default:
            return state
    }
}
