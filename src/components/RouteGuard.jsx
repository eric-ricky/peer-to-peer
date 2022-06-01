import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/authContext";

const RouteGuard = ({ children }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  const checkAuth = (url) => {
    const publicPaths = ["/", "/user/auth/login", "/user/auth/signup"];
    const path = url.split("?")[0];
    if (!user && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/user/auth/login",
        query: { returnTo: router.asPath },
      });
      return;
    }

    setAuthorized(true);
  };

  const hideContent = () => setAuthorized(false);

  useEffect(() => {
    checkAuth(router.asPath);
    router.events.on("routeChangeStart", hideContent);
    router.events.on("routeChangeComplete", checkAuth);

    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", checkAuth);
    };
  }, [user]);

  return authorized && children;
};

export default RouteGuard;
