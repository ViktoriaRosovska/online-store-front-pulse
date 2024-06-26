import BrandsList from "components/brand/Brand";
import { Helmet } from "react-helmet";
const Brands = () => {
  return (
    <>
      <Helmet>
        <title>PulseRun Brands</title>
      </Helmet>
      <BrandsList title={"Бренди"} />
    </>
  );
};

export default Brands;
