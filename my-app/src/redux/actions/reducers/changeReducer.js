const changeReducer = (state,action) =>{
switch(action.type){
    case "change":
        return{
init:action.payload
        }
        default:break;
}
}
export default changeReducer;