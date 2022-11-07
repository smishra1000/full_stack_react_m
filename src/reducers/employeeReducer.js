const initialState = {
    employees:[
        {
            id:1,
            name:"sameer"
        }
    ]
}

const employeeReducer = (state=initialState,action) =>{
    switch (action.type){
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                employees:[
                    ...state.employees,
                    action.payload
                ]
            }
        default:
            return state    
    }
}

export default employeeReducer

