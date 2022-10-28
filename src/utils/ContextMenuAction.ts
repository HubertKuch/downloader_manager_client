export default interface ContextMenuAction {
    id: string;
    name: string;
    actionHandler: (event: MouseEvent, contextMenuTarget: HTMLElement) => void;
}