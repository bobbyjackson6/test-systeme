import { ContainerOptions, LocaleOptions, UnifiedTableItemType } from "./types";

export const convertDateString = (
  dateString: string,
  dateOptions?: LocaleOptions
): string => {
  const date = new Date(dateString);
  if (dateOptions) {
    return date.toLocaleDateString(dateOptions.lang, dateOptions.options);
  }
  return date.toLocaleTimeString("en-US");
};

export const createContainer = (options: ContainerOptions) => {
  if (document.getElementById(options.id)) {
    return;
  }

  const { id, mountNode = document.body } = options;

  const portalContainer = document.createElement("div");

  portalContainer.setAttribute("id", id);
  mountNode.appendChild(portalContainer);
};

export const sortTable = <T extends UnifiedTableItemType>(
  items: T[],
  sortBy: keyof T,
  ascending: boolean = true
): T[] => {
  return items.sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (valueA < valueB) {
      return ascending ? -1 : 1;
    }
    if (valueA > valueB) {
      return ascending ? 1 : -1;
    }
    return 0;
  });
};

export const filterTable = <T extends UnifiedTableItemType>(
  items: T[],
  filterBy: keyof T,
  filterValue: string,
): T[] => {
  return items.filter(item => {
    const fieldValue = item[filterBy];

    // Проверяем, является ли поле строкой и содержит ли оно искомую подстроку
    if (typeof fieldValue === 'string') {
      return fieldValue.toLowerCase().includes(filterValue.toLowerCase());
    }

    return false;
  });
};

export const getOption = (selectId: string) => {
  const selectElement = document.getElementById(selectId) as HTMLSelectElement;
  if (selectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex].value;
    return selectedOption;
  }
  
} 