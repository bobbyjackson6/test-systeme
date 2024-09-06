import { EditButton } from "../edit-button/edit-button";
import { StringInput } from "../edit-modal/edit-modal";
import { Modal } from "../modal/modal";
import { TCell } from "../table/components/tcell/tcell";
import { THeadCell } from "../table/components/thead-cell/thead-cell";
import { THead } from "../table/components/thead/thead";
import { TRow } from "../table/components/trow/trow";
import { Table } from "../table/table";

import cn from "classnames";

import styles from "./styles.module.css";
import { TBody } from "../table/components/tbody/tbody";
import { useEffect, useState } from "react";
import { UnifiedTableItemType } from "../../shared/types";
import { filterTable, sortTable } from "../../shared/helpers";
import { FilterBlock } from "../filter-block/filter-block";

type UnifiedTableProps = {
  items: UnifiedTableItemType[];
  headCells: Array<keyof UnifiedTableItemType | JSX.Element>;
  editionColumn?: string;
  sortableColumns?: string[];
  filterableColumns?: string[];
};

export const UnifiedTable = ({
  items,
  headCells,
  editionColumn,
  sortableColumns,
  filterableColumns,
}: UnifiedTableProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const [sortConfig, setSortConfig] = useState<{
    key: keyof UnifiedTableItemType;
    ascending: boolean;
  } | null>(null);

  const [tableItems, setItems] = useState(items);

  const [editingElement, setEditingElement] = useState<
    (typeof items)[0] | null
  >(null);

  const [currentFilterOption, setCurrentFilterOption] = useState<string>("");

  const handleSort = (field: keyof UnifiedTableItemType) => {
    const isAscending =
      sortConfig?.key === field ? !sortConfig.ascending : true;
    const sorted = sortTable([...tableItems], field, isAscending);
    setItems(sorted);
    setSortConfig({ key: field, ascending: isAscending });
  };

  const handleFilter = (field: keyof UnifiedTableItemType, value: string) => {
    const filtered = filterTable(items, field, value);
    setItems(filtered);
  };

  const handleEdit = (id: number) => () => {
    setModalVisible(true);
    const chosenItem = tableItems.find((item) => item.id === id);

    if (chosenItem) {
      setEditingElement(chosenItem);
    }
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleChangeEditingElement = (newString: string, id: number) => {
    const editingItemIndex = tableItems.findIndex((item) => {
      return item.id === id;
    });
    const newItems = tableItems;
    if (editionColumn) {
      newItems[editingItemIndex][editionColumn] = newString;
    }
    setItems(newItems);
  };

  useEffect(() => {
    if (filterableColumns) {
      setCurrentFilterOption(filterableColumns[0]);
    }
  }, [filterableColumns]);

  return (
    <div>
      {filterableColumns && (
        <FilterBlock
          filterableColumns={filterableColumns}
          currentFilterOption={currentFilterOption}
          onChange={handleFilter}
        />
      )}
      <Table>
        <THead>
          {headCells.map((headCell) => {
            if (
              sortableColumns &&
              typeof headCell === "string" &&
              sortableColumns.includes(headCell)
            ) {
              return (
                <THeadCell
                  key={headCell}
                  onClick={() => handleSort(headCell)}
                  className={cn(styles.headCell, styles.headCellSortable)}
                >
                  {headCell}
                </THeadCell>
              );
            }
            return (
              <THeadCell key={String(headCell)} className={styles.headCell}>
                {headCell}
              </THeadCell>
            );
          })}
          {!!editionColumn ? <THeadCell></THeadCell> : null}
        </THead>
        <TBody>
          {tableItems.map((item) => (
            <TRow key={Number(item.id)}>
              <>
                {Object.values(item).map((value) => (
                  <TCell key={String(value)}>
                    {typeof value === "boolean" ? String(value) : value}
                  </TCell>
                ))}
                {!!editionColumn && (
                  <TCell>
                    <EditButton onClick={handleEdit(Number(item.id))} />
                  </TCell>
                )}
              </>
            </TRow>
          ))}
        </TBody>
      </Table>
      {isModalVisible && editionColumn && editingElement?.id && (
        <Modal onClose={handleClose} containerId={"edit-modal"} title={"Edit"}>
          <StringInput
            initialId={Number(editingElement.id)}
            initialString={String(editingElement[editionColumn])}
            onStringChange={handleChangeEditingElement}
            onClose={handleClose}
          />
        </Modal>
      )}
    </div>
  );
};
