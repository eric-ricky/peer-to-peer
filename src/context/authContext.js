import { createContext, useState, useEffect } from "react";

// const INITIAL_STATE = {
//   user: null,
//   onLogin: () => {},
//   onLogout: () => {},
// };

export const AuthContext = createContext();

// const AuthReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN_START":
//       return {
//         user: null,
//         loading: true,
//         error: null,
//       };
//     case "LOGIN_SUCCESS":
//       return {
//         user: action.payload,
//         loading: false,
//         error: null,
//       };
//     case "LOGIN_FAILURE":
//       return {
//         user: null,
//         loading: false,
//         error: action.payload,
//       };
//     case "LOGOUT":
//       return {
//         user: null,
//         loading: false,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

const AuthContextProvider = ({ children }) => {
  // const [state, dispatchAuth] = useReducer(AuthReducer, INITIAL_STATE);
  let initial = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(initial);
  console.log("auth context...", user);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleLogout = () => {
    console.log(`loging out ${user.email}`);
    setUser(null);
  };

  const handleLogin = (payload) => {
    console.log(`logging in as ${payload.email}...`);
    setUser(payload);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
