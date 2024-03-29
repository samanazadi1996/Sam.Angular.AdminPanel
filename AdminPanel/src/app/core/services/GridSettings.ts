export interface GridSettings {
  columnsConfig: ColumnSettings[];
  acionConfig?: AcionSettings[];
}

export interface ColumnSettings {
  field: string;
  title: string;
  width: number;
  hidden?: boolean;
  pipeName?: string;
}

export interface AcionSettings {
  title?: string;
  icon?: string;
  class?: string;
  click: any;
  where?: string;
}
