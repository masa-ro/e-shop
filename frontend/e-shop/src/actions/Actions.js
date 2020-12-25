
export const fetchProducts = (products) => ({
    type: 'FETCH_PRODUCTS',
    payload: {
        products,
    },
});

export const fetchCategories = (categories) => ({
    type: 'FETCH_CATEGORIES',
    payload: {
        categories,
    },
});

export const inputText = (text) => ({
    type: 'INPUT_TEXT',
    payload: {
        text,
    },
});

export const inputSelect = (select) => ({
    type: 'INPUT_SELECT',
    payload: {
        select,
    },
});

export const fetchUsers = (users) => ({
    type: 'FETCH_USERS',
    payload: {
        users,
    },
});

export const inputName = (name) => ({
    type: 'INPUT_NAME',
    payload: {
        name,
    },
});

export const inputBirthday = (birthday) => ({
    type: 'INPUT_BIRTHDAY',
    payload: {
        birthday,
    },
});

export const inputGender = (gender) => ({
    type: 'INPUT_GENDER',
    payload: {
        gender,
    },
});

export const inputChildmode = (childmode) => ({
    type: 'INPUT_CHILDMODE',
    payload: {
        childmode,
    },
});