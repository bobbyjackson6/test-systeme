import { PageWrapper } from "../../components/page-wrapper/page-wrapper";
import { PAGES } from "../../data/pages";
import { UnifiedTable } from "../../components/unified-table/unified-table";
import { convertDateString } from "../../shared/helpers";

export const Pages = () => {
  const pagesItems = PAGES.map((item) => {
    return {
      ...item,
      updatedAt: convertDateString(item.updatedAt),
      publishedAt: convertDateString(item.publishedAt),
    };
  });

  return (
    <PageWrapper>
      <UnifiedTable
        items={pagesItems}
        headCells={Object.keys(pagesItems[0])}
        editionColumn="title"
        sortableColumns={["title"]}
        filterableColumns={['title']}
      />
    </PageWrapper>
  );
};
