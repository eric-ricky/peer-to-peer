import dynamic from "next/dynamic";
import { CssBaseline } from "@mui/material";
import RouteGuard from "../components/RouteGuard";
import "../styles/globals.css";
// import AuthContextProvider from "../context/authContext";

const AuthContextProvider = dynamic(() => import("../context/authContext"), {
  ssr: false,
});

// const DynamicComponentWithNoSSR = dynamic(
//   () => import('../components/hello3'),
//   { ssr: false }
// )

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <CssBaseline />
        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
