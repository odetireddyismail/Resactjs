
const initialState=20;

export const ChangeNumber=(state=initialState,action)=>{
  
    switch(action.type){

        case 'ADD' :
            return state+1;
        case 'DE':
            return state-1;
        
        default:return state
    }
}
