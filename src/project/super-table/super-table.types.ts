export interface SuperTableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  filter?: boolean;
}

export interface SuperTableConfig {
  columns: SuperTableColumn[];
  paginator?: boolean;
  rows?: number;
  sortMode?: 'single' | 'multiple';
  stripedRows?: boolean;
  showGridlines?: boolean;
}
