
let initialState = {
    contactList:[],
    keyword: "",
    completeContactList: [],
};

function reducer(state = initialState, action){
   const {type, payload} = action;
    switch(type){
        case "ADD_CONTACT":
            return{
                ...state,
                contactList: [
                    ...state.contactList,
                    {
                        name:
                        payload.name,
                        phoneNumber:
                        payload.phoneNumber
                    },
                ],
            };
            case "SEARCH_BY_USERNAME":
                return { ...state, keyword: payload.keyword };
                case "FETCH_ALL_CONTACTS":
                    if (payload && payload.completeContactList) {
                        return {
                            ...state,
                            completeContactList: action.payload
                          };
                    } else {
                        return state; // Handle the case where payload or completeContactList is undefined
                    }
              default:
                return { ...state };
    }
};

export default reducer;