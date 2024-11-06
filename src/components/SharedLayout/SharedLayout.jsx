import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import { MainWrapper, SharedLayoutContainer } from "./SharedLayout.styled";
import { ScrollToTop } from "../ScrollToTop.js";
import Footer from "../Footer/Footer";
import { Suspense, useEffect } from "react";
import { Preloader } from "components/Preloader/Preloader";
import { useDispatch } from "react-redux";
import { setCredentials, useFetchCurrentUserQuery } from "../../redux/auth";

function SharedLayout() {
  const dispatch = useDispatch();
  const locationPath = useLocation().search;

  const { data, refetch } = useFetchCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    console.log(locationPath);

    if (locationPath.substring(1, 6) == "token") {
      let token = locationPath.substring(7, locationPath.length);
      console.log(token);

      if (token) {
        dispatch(setCredentials({ token: token }));
        refetch();
      }
      const params = new URLSearchParams(location.search);
      params.delete("token");
    }
  }, [dispatch, locationPath, refetch]);

  // console.log("userData", data);
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
