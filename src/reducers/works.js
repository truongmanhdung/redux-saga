import * as workTypes from "../constansts/work";
import * as userTypes from "../constansts/user";
const initialState = {};

const myReducers = (state = initialState, action) => {
    switch (action.type) {
        case workTypes.FETCH_WORKS: {
            return {
                ...state,
                listWorks: [],
                workEditing: null,
            };
        }
        case workTypes.FETCH_WORKS_SUCCESS: {  
            const { data } = action.payload;
            return {
                ...state,
                listWorks: data,
            };
        }
        case workTypes.FETCH_WORKS_FAILED: {
            return {
                ...state,
                listWorks: [],
            };
        }
        case workTypes.ADD_WORKS: {
            return {
                ...state,
            };
        }
        case workTypes.ADD_WORK_SUCCESS: {
            const { work } = action.payload;
            state.listWorks.push(work);
            return {
                ...state,
                listWorks: state.listWorks,
            };
        }
        case workTypes.EDIT_WORKS: {
            const { work } = action.payload;
            return {
                ...state,
                workEditing: work,
            };
        }
        // case workTypes.FILTER_WORKS: {
        //     return ;
        // };

        case workTypes.FILTER_WORKS_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                listWorks: data,
            };
        }
        case workTypes.UPDATE_WORKS: {
            return {
                ...state,
            };
        }
        case workTypes.UPDATE_WORK_SUCCESS: {
            const { data } = action.payload;
            const { listWorks } = state;
            const index = listWorks.findIndex((item) => item.id === data.id);
            if (index !== -1) {
                const newList = [
                    ...listWorks.slice(0, index),
                    data,
                    ...listWorks.slice(index + 1),
                ];
                return {
                    ...state,
                    listWorks: newList,
                };
            } else {
                return {
                    ...state,
                };
            }
        }
        case workTypes.DELETE_WORKS: {
            return {
                ...state,
            };
        }
        case workTypes.DELETE_WORK_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                listWorks: state.listWorks.filter(
                    (item) => item.id !== data.id
                ),
            };
        }
        case workTypes.UPDATE_STATUS: {
            return {
                ...state,
            };
        }
        case workTypes.UPDATE_STATUS_SUCCESS: {
            const { data } = action.payload;
            const { listWorks } = state;
            const index = listWorks.findIndex((item) => item.id === data.id);
            if (index !== -1) {
                const newList = [
                    ...listWorks.slice(0, index),
                    data,
                    ...listWorks.slice(index + 1),
                ];
                return {
                    ...state,
                    listWorks: newList,
                };
            } else {
                return {
                    ...state,
                };
            }
        }
        case userTypes.LOGOUT: {
            return {
                ...state,
                listWorks: [],
            };
        }
        default:
            return state;
    }
};

export default myReducers;
