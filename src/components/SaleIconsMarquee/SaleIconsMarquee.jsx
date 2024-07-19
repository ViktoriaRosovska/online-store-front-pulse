import { ReactComponent as SaleIcon } from "../../assets/svg/saleIcon.svg";

const SaleIconsMarquee = ({ count }) => {
  const icons = Array.from({ length: count }, (_, index) => (
    <SaleIcon key={index} />
  ));

  return <div className="marquee-content">{icons}</div>;
};

export default SaleIconsMarquee;
