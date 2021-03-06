import { Component } from "./component";
import { PopupService } from "./popupService";
import { GridOptionsWrapper } from "../gridOptionsWrapper";
export interface PanelOptions {
    component?: Component;
    hideTitleBar?: boolean;
    closable?: boolean;
    title?: string;
    minWidth?: number;
    width?: number | string;
    minHeight?: number;
    height?: number | string;
    centered?: boolean;
    cssIdentifier?: string;
    x?: number;
    y?: number;
}
export declare class AgPanel extends Component {
    protected static CLOSE_BTN_TEMPLATE: string;
    protected readonly popupService: PopupService;
    protected readonly gridOptionsWrapper: GridOptionsWrapper;
    protected closable: boolean;
    protected config: PanelOptions | undefined;
    protected closeButtonComp: Component;
    protected popupParent: HTMLElement;
    protected minWidth: number;
    protected minHeight?: number;
    protected positioned: boolean;
    protected dragStartPosition: {
        x: number;
        y: number;
    };
    protected position: {
        x: number;
        y: number;
    };
    protected size: {
        width: number | undefined;
        height: number | undefined;
    };
    close: () => void;
    protected readonly eContentWrapper: HTMLElement;
    protected readonly eTitleBar: HTMLElement;
    protected readonly eTitleBarButtons: HTMLElement;
    protected readonly eTitle: HTMLElement;
    constructor(config?: PanelOptions);
    private static getTemplate;
    protected postConstruct(): void;
    protected renderComponent(): void;
    protected updateDragStartPosition(x: number, y: number): void;
    protected calculateMouseMovement(params: {
        e: MouseEvent;
        topBuffer?: number;
        anywhereWithin?: boolean;
        isLeft?: boolean;
        isTop?: boolean;
    }): {
        movementX: number;
        movementY: number;
    };
    private refreshSize;
    protected offsetElement(x?: number, y?: number): void;
    getHeight(): number;
    setHeight(height: number | string): void;
    getWidth(): number;
    setWidth(width: number | string): void;
    center(): void;
    setClosable(closable: boolean): void;
    setBodyComponent(bodyComponent: Component): void;
    addTitleBarButton(button: Component, position?: number): void;
    getBodyHeight(): number;
    getBodyWidth(): number;
    setTitle(title: string): void;
    private onBtClose;
    protected destroy(): void;
}
