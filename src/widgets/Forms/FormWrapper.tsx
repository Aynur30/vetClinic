import styles from './FormWrapper.module.scss';
import { Link } from 'react-router-dom';
import cl from 'classnames';
interface FormWrapperProps {
    children: React.ReactNode,
    style?: {
        [key: string]: string;
    },
    className?: string,
    text: {
        title: string,
        linkText: string
    },
    link: string
}

const FormWrapper = (props: FormWrapperProps) => {
  const styleMain =
    props.className !== undefined
      ? cl(styles.wrapper_container, props.className)
      : styles.wrapper_container;

  return (
    <div className={styleMain} style={props.style}>
      {props.children}
      <h4 className={styles.link_text}>
        {props.text.title} <Link className={styles.link} to={props.link}>{props.text.linkText}</Link>
      </h4>
    </div>
  )
}

export default FormWrapper;