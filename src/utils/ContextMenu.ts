import CartesianPoint from "./CartesianPoint";

export default interface ContextMenu {
    show(at: CartesianPoint): void;
    hide(): void;
    isShowed(): Boolean;
    setActions(currentTarget: HTMLElement): HTMLElement | null;
}
