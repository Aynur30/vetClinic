import { FC, useMemo } from 'react';
import styles from './Button.module.scss'
import cl from 'classnames'
import { buttonStyle } from './ButtonType';

const Button: FC <buttonStyle> = (props: buttonStyle) => {
    const { text, image, theme, disableBtn, onClick, styleBtn, addClass} = props;

    const mainStyle = useMemo( () => {
        const resultStyles: Record<string, string | undefined> = {}
        for (const key in styleBtn) {
            if(key === 'backgroundColor') {
                resultStyles[key] = theme?.backgroundColor !== undefined ? `${theme?.backgroundColor}` : `${styleBtn?.backgroundColor}`
            } else if(key === 'color') {
                resultStyles[key] = theme?.color !== undefined ? `${theme?.color}` : `${styleBtn?.color}`
            } else if (styleBtn) {
                resultStyles[key] = styleBtn[key]  
            }   
        }
            return resultStyles 
    }, [ styleBtn, theme?.backgroundColor, theme?.color ])  

    const disableStyle = disableBtn ? cl(styles.btn_default, styles.btn_disabled) : `${styles.btn_default} ${addClass}`; 

    const renderButton = useMemo(() => <button 
    disabled={disableBtn}
    style={mainStyle}
    className={disableStyle}
    onClick={onClick}
    >
        {image && <img className={styles.btn_img} src={image} />}
        {text}
    </button>, [text, disableBtn, onClick, mainStyle, disableStyle])
    return renderButton
}

export default Button;