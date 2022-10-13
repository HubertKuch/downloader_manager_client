import CartesianPoint from "./CartesianPoint";

export default interface ContextMenuState {
    isHide: boolean;
    position: CartesianPoint;
    currentTarget: HTMLElement | null;
}