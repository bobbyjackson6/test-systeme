import { PageWrapper } from "../../components/page-wrapper/page-wrapper";
import { PRODUCTS } from "../../data/products";
import { convertDateString } from "../../shared/helpers";
import { UnifiedTable } from "../../components/unified-table/unified-table";

export const Products = () => {
  const productItems = PRODUCTS.map((item) => {
    return {
      id: item.id,
      name: item.name,
      size: item.options.size,
      amount: item.options.amount,
      active: item.active,
      createdAt: convertDateString(item.createdAt),
    };
  });

  return (
    <PageWrapper>
      <UnifiedTable
        items={productItems}
        headCells={Object.keys(productItems[0])}
        editionColumn="name"
        sortableColumns={["name"]}
        filterableColumns={["name"]}
      />
    </PageWrapper>
  );
};
