export type buttonStyle = {
    text?: string
    image?: string
    theme?: {
        color?: string
        backgroundColor?: string
    }
    disableBtn?: boolean
    styleBtn?: {
        width?: string,
        height?: string,
        backgroundColor?: string,
        color?: string,
        [key: string]: string | undefined,
    }
    onClick?: () => void
    [key: string]: string | boolean | undefined | (() => void) | object
}