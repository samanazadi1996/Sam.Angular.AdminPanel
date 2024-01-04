export interface GridSettings {
    columnsConfig: ColumnSettings[];
}


export interface ColumnSettings {
    field: string;
    title: string;
    format?: string;
    width: number;
    _width?: number;
    filterable?: boolean;
    orderIndex?: number;
    hidden?: boolean;
    minResizableWidth?: number;
    hasPipe?: boolean;
    pipeName?: string;
    pipeValue?: string;
}
