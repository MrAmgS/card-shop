const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`

    return newTitle
} // to short product name

const isInCart = (state , id) => {
    const result = !!state.selectedItems.find(item => item.id === id);
    return result;
} //to check an Item is in card 

const quantityCount = (state , id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if( index === -1){
        return false
    } else {
        return state.selectedItems[index].quantity;
    }
} // to get quantity of an Item

export {shorten , isInCart , quantityCount};