export const ERROR = {
    status: 500,
    message: 'Internal server error.',
};
export const INVALID_REQUEST = (message) => {
    return {
        status: 400,
        message,
    }
};
export const SUCCESS = (message) => {
    return {
        status: 200,
        message,
    }
};
export const USER_CREATED = (userId) => {
    return {
        status: 200,
        message: "User created.",
        userId
    }
}
export const USER_ALREADY_EXISTS = () => {
    return {
        status: 11000,
        message: "User already exists.",
        userId: null
    }
}

export const USER_HOBBIES_SAVED = () => {
    return {
        status: 200,
        message: "User hobbies saved.",
    }
}

export const USER_HOBBIES = (hobbies) => {
    return {
        status: 200,
        message: "User hobbies.",
        hobbies
    }
}

export const DELETE_USER_HOBBIES = () => {
    return {
        status: 200,
        message: "User hobbies deleted."
    }
}