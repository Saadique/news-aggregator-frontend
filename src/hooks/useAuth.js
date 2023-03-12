import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import ApiIndex from '../api/index';
import { setAuthTokens, setAuthUser } from '../store/actions/authActions';
import { isAuthenticated } from '../store/reducers/authReducer';

export const useAuth = () => {

    const { authStatus, access_token, user} = useSelector((state) => ({
        authStatus: isAuthenticated(state),
        access_token: state.auth.access_token,
        user: state.auth.user
    }), shallowEqual);

    const dispatch = useDispatch();

    const login = async (email, password) => {
        try {
            let response = await ApiIndex.AuthApi.login(email, password);

            dispatch(setAuthTokens({
                access_token: response.data.access_token,
            }));

            localStorage.setItem('access_token', response.data.access_token);
        }
        catch (error) {
            throw error;
        }
    };

    const register = (data) => {
        return ApiIndex.AuthApi.register(data);
    };

    const logout = () => {
        dispatch(setAuthTokens({
            access_token: undefined,
        }));

        dispatch(setAuthUser(undefined));

        localStorage.setItem('access_token', undefined);
        localStorage.setItem('refresh_token', undefined);
    };

    return {
        authStatus,
        access_token,
        user,
        login,
        register,
        logout
    }
}