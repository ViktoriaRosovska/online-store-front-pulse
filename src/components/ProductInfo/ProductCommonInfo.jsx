import { PackageInfoItem, PackageInfoList } from "./ProductInfo.styled";
import { ReactComponent as ConditionsIcon } from "/public/icons/product-page-icons/conditions.svg";
import { ReactComponent as DeliveryIcon } from "/public/icons/product-page-icons/delivery.svg";
import { ReactComponent as ExchangeIcon } from "/public/icons/product-page-icons/exchange.svg";
import { ReactComponent as OriginalIcon } from "/public/icons/product-page-icons/original.svg";

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
        <ConditionsIcon /> Умови оплати, доставки та повернення
      </PackageInfoItem>
    </PackageInfoList>
  );
};

export default ProductCommonInfo;
