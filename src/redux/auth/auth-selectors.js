const getToken = state => state.auth.token;
const isAuth = state => state.auth.isLoggedIn;

const authSelectors = { getToken, isAuth };

export default authSelectors;
