import { PageWrapper } from "../../components/page-wrapper/page-wrapper";
import { UnifiedTable } from "../../components/unified-table/unified-table";
import { PRICE_PLANS } from "../../data/price-plans";
import { convertDateString } from "../../shared/helpers";

export const PricePlans = () => {
  const pricePlansItems = PRICE_PLANS.map((item) => {
    return {
      ...item,
      createdAt: convertDateString(item.createdAt),
      removedAt: convertDateString(item.removedAt),
    };
  });

  return (
    <PageWrapper>
      <UnifiedTable
        items={pricePlansItems}
        headCells={Object.keys(pricePlansItems[0])}
        editionColumn="description"
        sortableColumns={["description"]}
        filterableColumns={["description"]}
      />
    </PageWrapper>
  );
};
