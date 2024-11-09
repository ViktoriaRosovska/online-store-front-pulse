import { ROUTES } from "../../utils/routes";
import { PackageInfoItem, PackageInfoList } from "./ProductInfo.styled";
import { ReactComponent as ConditionsIcon } from "../../assets/svg/product-page-icons/conditions.svg";
import { ReactComponent as DeliveryIcon } from "../../assets/svg/product-page-icons/delivery.svg";
import { ReactComponent as ExchangeIcon } from "../../assets/svg/product-page-icons/exchange.svg";
import { ReactComponent as OriginalIcon } from "../../assets/svg/product-page-icons/original.svg";
import { StyledLinks } from "components/Typography/Typography.styled";

const ProductCommonInfo = () => {
  return (
    <PackageInfoList>
      <PackageInfoItem>
        <OriginalIcon /> Тільки оригінал
      </PackageInfoItem>

      <PackageInfoItem>
        <DeliveryIcon /> Доставка 1-2 дні
      </PackageInfoItem>

      <PackageInfoItem>
        <ExchangeIcon /> Легкий обмін та повернення
      </PackageInfoItem>

      <PackageInfoItem>
        <ConditionsIcon />
        <StyledLinks to={ROUTES.CONDITIONS}>
          Умови оплати, доставки та повернення
        </StyledLinks>
      </PackageInfoItem>
    </PackageInfoList>
  );
};

export default ProductCommonInfo;
