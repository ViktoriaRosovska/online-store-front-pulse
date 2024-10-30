import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import { MainWrapper, SharedLayoutContainer } from "./SharedLayout.styled";
import { ScrollToTop } from "../ScrollToTop.js";
import Footer from "../Footer/Footer";
import { Suspense, useEffect } from "react";
import { Preloader } from "components/Preloader/Preloader";
import { useDispatch } from "react-redux";
import { setCredentials, useFetchCurrentUserQuery } from "../../redux/auth";
// import { useLazyLoginUserGoogleQuery } from "../../redux/auth/userAuthApi";

function SharedLayout() {
  const dispatch = useDispatch();
  const locationPath = useLocation().search;
  const { data: userData, refetch } = useFetchCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    console.log(locationPath);
    let token = locationPath.substring(7, locationPath.length - 1);
    console.log(token);

    if (token) {
      dispatch(setCredentials({ token: token }));

      const params = new URLSearchParams(location.search);
      params.delete("token");
    }

    // loginUserGoogle();
  }, [dispatch, locationPath]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  console.log("userData", userData);
  return (
    <Suspense fallback={<Preloader />}>
      <SharedLayoutContainer>
        <ScrollToTop />
        <Header />

        <MainWrapper>
          <Outlet />
        </MainWrapper>

        <Footer />
      </SharedLayoutContainer>
    </Suspense>
  );
}

export default SharedLayout;
