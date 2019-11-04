import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const user = {
        uid: '12345'
    };

    const action = {
        type: 'LOGIN',
        uid: user.uid
    };

    const state = authReducer(user, action);
    expect(state).toEqual(user);
});

test('should clear uid for logout', () => {
    const user = {
        uid: '12345'
    };

    const action = {
        type: 'LOGOUT'
    };

    const state = authReducer(user, action);
    expect(state).toEqual({});
});

