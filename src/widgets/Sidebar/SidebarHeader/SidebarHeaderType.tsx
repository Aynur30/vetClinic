export interface SidebarHeaderType {
    classes?: string,
    text: string,
    onClick: () => void
    [key: string]: string | boolean | undefined | (() => void) | object
}