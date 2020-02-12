import { 
    INCREMENT, 
    DECREMENT, 
    RESET
} from "./actions";


// Our ideal/default state is just a number:
// 0
// 0 to 1


export function count(state=0, action) {
    let newState = state;
    switch(action.type) {
        case INCREMENT:
            newState += 1;
            break;
        case DECREMENT:
            newState -= 1;
            break;
        case RESET:
            newState = 0;
            break;
        default:
            break;
    } 
    return newState;
}