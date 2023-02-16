export const addCharacter = (character) => {
    return {type: 'addCharacter', payload: character}
}
export const removeCharacter = (id) => {
    return {type: 'removeCharacter', payload: id}
}