import { Event as CanvasEvent } from '@antv/g-canvas';
import {
  CellScrollPosition,
  Data,
  DataItem,
  HiddenColumnsInfo,
  LayoutResult,
  Style,
  ViewMeta,
} from '.';
import { ResizeEvent, S2Event, SortMethodType } from '@/common/constant';
import { Node } from '@/facet/layout/node';

type CollapsedRowsType = {
  collapsedRows: Record<string, boolean> & {
    [x: number]: any;
  };
};

type SortParams = {
  sortKey: string;
  sortMethod: SortMethodType;
  compareFunc?: (data: Data) => DataItem;
};

export type RowCellCollapseTreeRowsType = {
  id: string;
  isCollapsed: boolean;
  node: Node;
};

type CanvasEventHandler = (event: CanvasEvent) => void;

type KeyboardEventHandler = (event: KeyboardEvent) => void;

type EventHandler = (event: MouseEvent) => void;

type ResizeHandler = (style: Style) => void;

export interface EmitterType {
  /** ================ Global ================  */
  [S2Event.GLOBAL_COPIED]: (data: string) => void;
  [S2Event.GLOBAL_KEYBOARD_DOWN]: KeyboardEventHandler;
  [S2Event.GLOBAL_KEYBOARD_UP]: KeyboardEventHandler;
  [S2Event.GLOBAL_MOUSE_UP]: EventHandler;
  [S2Event.GLOBAL_RESIZE_MOUSE_DOWN]: CanvasEventHandler;
  [S2Event.GLOBAL_RESIZE_MOUSE_UP]: CanvasEventHandler;
  [S2Event.GLOBAL_RESIZE_MOUSE_MOVE]: CanvasEventHandler;

  /** ================ Sort ================  */
  [S2Event.RANGE_SORT]: (info: SortParams) => void;
  [S2Event.RANGE_SORTING]: (info: SortParams) => void;
  [S2Event.RANGE_SORTED]: (rangeData: Data[]) => void;

  /** ================ Date Cell ================  */
  [S2Event.DATA_CELL_MOUSE_DOWN]: CanvasEventHandler;
  [S2Event.DATA_CELL_MOUSE_UP]: CanvasEventHandler;
  [S2Event.DATA_CELL_MOUSE_MOVE]: CanvasEventHandler;
  [S2Event.DATA_CELL_HOVER]: CanvasEventHandler;
  [S2Event.DATA_CELL_CLICK]: CanvasEventHandler;
  [S2Event.DATA_CELL_TREND_ICON_CLICK]: (data: ViewMeta) => void;

  /** ================ Row Cell ================  */
  [S2Event.ROW_CELL_MOUSE_DOWN]: CanvasEventHandler;
  [S2Event.ROW_CELL_MOUSE_MOVE]: CanvasEventHandler;
  [S2Event.ROW_CELL_HOVER]: CanvasEventHandler;
  [S2Event.ROW_CELL_CLICK]: CanvasEventHandler;
  [S2Event.ROW_CELL_MOUSE_UP]: CanvasEventHandler;
  [S2Event.ROW_CELL_COLLAPSE_TREE_ROWS]: (
    data: RowCellCollapseTreeRowsType,
  ) => void;
  [S2Event.ROW_CELL_TEXT_CLICK]: (data: { key: string; record: Data }) => void;

  /** ================ Col Cell ================  */
  [S2Event.COL_CELL_MOUSE_DOWN]: CanvasEventHandler;
  [S2Event.COL_CELL_MOUSE_MOVE]: CanvasEventHandler;
  [S2Event.COL_CELL_HOVER]: CanvasEventHandler;
  [S2Event.COL_CELL_CLICK]: CanvasEventHandler;
  [S2Event.COL_CELL_MOUSE_UP]: CanvasEventHandler;

  /** ================ Corner Cell ================  */
  [S2Event.CORNER_CELL_MOUSE_MOVE]: CanvasEventHandler;
  [S2Event.CORNER_CELL_MOUSE_DOWN]: CanvasEventHandler;
  [S2Event.CORNER_CELL_HOVER]: CanvasEventHandler;
  [S2Event.CORNER_CELL_CLICK]: CanvasEventHandler;
  [S2Event.CORNER_CELL_MOUSE_UP]: CanvasEventHandler;

  /** ================ Merged Cell ================  */
  [S2Event.MERGED_CELLS_MOUSE_DOWN]: CanvasEventHandler;
  [S2Event.MERGED_ELLS_MOUSE_MOVE]: CanvasEventHandler;
  [S2Event.MERGED_CELLS_HOVER]: CanvasEventHandler;
  [S2Event.MERGED_CELLS_MOUSE_UP]: CanvasEventHandler;
  [S2Event.MERGED_CELLS_CLICK]: CanvasEventHandler;

  /** ================ Layout ================  */
  [S2Event.LAYOUT_COLLAPSE_ROWS]: (data: CollapsedRowsType) => void;
  [S2Event.LAYOUT_AFTER_COLLAPSE_ROWS]: (data: CollapsedRowsType) => void;
  [S2Event.LAYOUT_TREE_ROWS_COLLAPSE_ALL]: (hierarchyCollapse: boolean) => void;
  [S2Event.LAYOUT_PAGINATION]: (data: {
    pageSize: number;
    pageCount: number;
    total: number;
    current: number;
  }) => void;
  [S2Event.LAYOUT_AFTER_HEADER_LAYOUT]: (data: LayoutResult) => void;
  [S2Event.LAYOUT_CELL_SCROLL]: (data: CellScrollPosition) => void;
  [S2Event.LAYOUT_COL_NODE_BORDER_REACHED]: (data: Node) => void;
  [S2Event.LAYOUT_ROW_NODE_BORDER_REACHED]: (data: Node) => void;
  [S2Event.LAYOUT_TABLE_COL_EXPANDED]: (node: Node) => void;
  [S2Event.LAYOUT_TABLE_COL_HIDE]: (
    currentHiddenColumnsInfo: HiddenColumnsInfo,
    hiddenColumnsDetail: HiddenColumnsInfo[],
  ) => void;
  [S2Event.LAYOUT_BEFORE_RENDER]: () => void;
  [S2Event.LAYOUT_AFTER_RENDER]: () => void;

  /** ================ Resize ================  */
  [ResizeEvent.ROW_W]: ResizeHandler;
  [ResizeEvent.ROW_H]: ResizeHandler;
  [ResizeEvent.COL_W]: ResizeHandler;
  [ResizeEvent.COL_H]: ResizeHandler;
  [ResizeEvent.TREE_W]: ResizeHandler;
}