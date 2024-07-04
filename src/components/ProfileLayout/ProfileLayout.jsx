import ProfileMenu from "../UserAccount/ProfileMenu/ProfileMenu";
import { Container, PageSection } from "../../main.styled";
import MediaQuery from "react-responsive";
import { Outlet, useLocation } from "react-router-dom";
import { Box, OutletWrapper } from "./ProfileLayout.styled";
import Breadcrumbs from "components/Breadcrumbs";
import { BREADCRUMBS_PROFILE } from "../../utils/breadcrumbsVocabulary";
import { Helmet } from "react-helmet";

const ProfileLayout = () => {
  const location = useLocation().pathname

  const findBreadcrumb = (path) => {
    for (const key in BREADCRUMBS_PROFILE) {
      if (path.includes(key)) {
        return BREADCRUMBS_PROFILE[key]
      }
    }
    return ''
  }

  return (
    <>
      <Helmet>
        <title>PulseRun Profile</title>
      </Helmet>
    <PageSection>
      <Container>
        <Breadcrumbs current={findBreadcrumb(location)} />
        <Box>
          <MediaQuery minWidth={1440}>
            <ProfileMenu />
          </MediaQuery>
          <OutletWrapper>
            <Outlet />
          </OutletWrapper>
        </Box>
      </Container>
      </PageSection>
      </>
  );
};

export default ProfileLayout;
