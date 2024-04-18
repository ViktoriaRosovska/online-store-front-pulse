import { Link, useLocation } from "react-router-dom";
import { CurrentBreadcrumb, StyledBreadcrumbs } from "./Breadcrumbs.styled";
import { BREADCRUMBS } from "../../utils/breadcrumbsVocabulary";
import { useEffect, useState } from "react";
import { ROUTES } from "../../utils/routes";

const Breadcrumbs = ({ current }) => {
  const location = useLocation();

  const [prev, setPrev] = useState(null);
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
          <Link to={pathname}>{prev}</Link>
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
