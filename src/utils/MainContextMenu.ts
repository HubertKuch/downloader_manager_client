import React from "react";
import ContextMenuAction from "./ContextMenuAction";
import ContextMenu from "./ContextMenu";
import ContextMenuState from "./ContextMenuState";
import CartesianPoint from "./CartesianPoint";

const FILES_CONTEXT_MENU_ACTIONS: ContextMenuAction[] = [
    {
        id: "DOWNLOAD",
        name: "Download",
        actionHandler: (event: MouseEvent) => {
            console.log("File download")
        }
    },
    {
        id: "REMOVE",
        name: "Remove",
        actionHandler: (event: MouseEvent) => {
            console.log("File remove action")
        }
    },
];

export default class MainContextMenu implements ContextMenu {
    private actions: ContextMenuAction[];
    private readonly definedActions: { [key: string]: ContextMenuAction[] } = {
        "file-actions": FILES_CONTEXT_MENU_ACTIONS
    }
    private state: ContextMenuState = {
        isHide: true,
        position: {
            x: 0,
            y: 0
        },
        currentTarget: null
    };
    private contextMenuElement: React.MutableRefObject<HTMLDivElement>;

    constructor(actions: ContextMenuAction[], contextMenuElement: React.MutableRefObject<HTMLDivElement>) {
        this.actions = actions;
        this.contextMenuElement = contextMenuElement;
    }

    public hide() {
        this.contextMenuElement.current.classList.add("hidden")
        this.state.isHide = true;
    }

    public show(at: CartesianPoint) {
        this.state.isHide = false;
        this.contextMenuElement.current.classList.remove("hidden");
        this.contextMenuElement.current.style.left = `${at.x}px`;
        this.contextMenuElement.current.style.top = `${at.y}px`;
    }

    isShowed(): Boolean {
        return !this.state.isHide;
    }

    private isContextMenuTarget(el: HTMLElement): boolean {
        return el.getAttribute("data-context-menu-actions-name") !== null;
    }

    getTarget(currentTarget: HTMLElement): HTMLElement | null {
        let target: HTMLElement | null = currentTarget;

        while (target.nodeName !== "BODY") {
            if (this.isContextMenuTarget(target)) break;

            target = target.parentElement;
        }

        if (!this.isContextMenuTarget(target)) target = null;

        return target;
    }

    private prepareSingleElement(action: ContextMenuAction): HTMLDivElement {
        const root = document.createElement("div");

        root.classList.add("context-menu-action");
        root.textContent = action.name;
        root.setAttribute("context-menu-action-id", action.id);
        root.addEventListener("click", (event: MouseEvent) => {
            action.actionHandler(event);
            this.hide();
        });

        return root;
    }

    setActions(currentTarget: HTMLElement): HTMLElement | null {
        const target: HTMLElement = this.getTarget(currentTarget);
        this.actions = [];
        this.contextMenuElement.current.innerHTML = "";

        if (!target) return null;

        const choosedActions: ContextMenuAction[] = this.definedActions[target.getAttribute("data-context-menu-actions-name")] ?? [];

        this.contextMenuElement.current.append(
            ...choosedActions.map(action => this.prepareSingleElement(action)) ?? null
        );

        return target;
    }
}
