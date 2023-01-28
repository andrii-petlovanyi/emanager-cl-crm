const getToken = state => state.auth.token;
const isAuth = state => state.auth.isLoggedIn;
const userName = state => state.auth.userName;
const userId = state => state.auth.userId;
const userNote = state => state.auth.notes;

const authSelectors = { getToken, isAuth, userName, userId, userNote };

export default authSelectors;
