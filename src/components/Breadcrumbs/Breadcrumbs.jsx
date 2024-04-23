import { Link, useLocation } from "react-router-dom";
import { CurrentBreadcrumb, StyledBreadcrumbs } from "./Breadcrumbs.styled";
import { BREADCRUMBS } from "../../utils/breadcrumbsVocabulary";
import { useEffect, useState } from "react";
import { ROUTES } from "../../utils/routes";

const Breadcrumbs = ({ current }) => {
  const [prev, setPrev] = useState(null);
  const location = useLocation();
  const pathname = location.state?.from;

  useEffect(() => {
    if (!pathname) return;
    setPrev(BREADCRUMBS[pathname]);
  }, [current, pathname]);

  return (
    <StyledBreadcrumbs>
      <Link to={ROUTES.HOME}>Головна</Link>

      {prev && (
        <>
          {" / "}
          <a href="#" onClick={() => history.back()}>
            {prev}
          </a>
          {/* <Link to={pathname}>{prev}</Link> */}
        </>
      )}

      {current && (
        <>
          {" / "}
          <CurrentBreadcrumb>{current}</CurrentBreadcrumb>
        </>
      )}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
