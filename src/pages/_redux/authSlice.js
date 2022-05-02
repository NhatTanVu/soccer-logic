import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = { isAuth: false, email: null, firstName: null, lastName: null }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: {
            reducer(state, action) {
                state.isAuth = action.payload.isAuth;
                state.email = action.payload.email;
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
            },
            prepare(isAuth, email, firstName, lastName) {
                return {
                    payload: {
                        id: nanoid(),
                        isAuth,
                        email,
                        firstName,
                        lastName
                    }
                }
            }
        },
        logout: {
            reducer(state, action) {
                state.isAuth = false;
                state.email = null;
                state.firstName = null;
                state.lastName = null;
            },
            prepare() {
                return {
                    payload: {}
                }
            }
        }
    }
})

export default authSlice.reducer

export const { login, logout } = authSlice.actions