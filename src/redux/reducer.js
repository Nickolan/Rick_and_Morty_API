const initialState = {
    myFavorites: [],
}

export const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'addCharacter':
            return {...state, myFavorites: action.payload}
    
        case 'removeCharacter':
            return {...state, myFavorites: state.myFavorites.filer(element => element.id !== action.payload) }
        default:
            return {...state}
    }
}