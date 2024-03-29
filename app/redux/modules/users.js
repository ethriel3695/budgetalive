// Users
const AUTH_USER = 'AUTH_USER';
const UNAUTH_USER = 'UNAUTH_USER';
const FETCHING_USER = 'FETCHING_USER';
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE';
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS';

export function authUser (uid) {
    return {
        type: AUTH_USER,
        uid,
    };
}

export function unauthUser () {
    return {
        type: UNAUTH_USER,
    };
}

export function fetchingUser () {
    return {
        type: FETCHING_USER,
    };
}

export function fetchingUserFailure (error) {
    return {
        type: FETCHING_USER_FAILURE,
        error: `Error fetching user${error}`,
    };
}

export function fetchingUserSucces (uid, user, timestamp) {
    return {
        type: FETCHING_USER_SUCCESS,
        uid,
        user,
        timestamp,
    };
}

const initialUserState = {
    lastUpdated: 0,
    info: {
        name: '',
        uid: '',
        avatar: '',
    },
};
function user (state = initialUserState, action) {
    switch (action.type) {
    case FETCHING_USER_SUCCESS:
        return {
            ...state,
            info: action.user,
            lastUpdated: action.timestamp,
        };
    default:
        return state;
    }
}

const initialState = {
    isFetching: false,
    error: '',
    isAuthed: false,
    authedId: '',
};

export default function users (state = initialState, action) {
    switch (action.type) {
    case AUTH_USER:
        return {
            // This is an object spread ES6/7 functionality
            ...state,
            isAuthed: true,
            authedId: action.uid,
        };
    case UNAUTH_USER:
        return {
            ...state,
            isAuthed: false,
            authedId: '',
        };

    case FETCHING_USER:
        return {
            ...state,
            isFetching: true,
        };
    case FETCHING_USER_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.error,
        };
    case FETCHING_USER_SUCCESS:
        return action.user === null
            ? {
                ...state,
                error: '',
                isFetching: false,
            }
            : {
                ...state,
                isFetching: false,
                error: '',
                [action.uid]: user(state[action.uid], action),
            };
    default:
        return state;
    }
}
