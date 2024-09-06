export interface Product {
  id: number;
  name: string;
  options: {
    size: string;
    amount: number;
  };
  active: boolean;
  createdAt: string;
}

export type TableOptionType = Product;

export interface LocaleOptions {
  lang: string;
  options?: Intl.DateTimeFormatOptions;
}

export type ContainerOptions = { id: string; mountNode?: HTMLElement };

export type UnifiedTableItemType = {
  [key: string]: string | number | boolean;
};
