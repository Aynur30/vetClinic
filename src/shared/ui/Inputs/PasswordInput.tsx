import { FC, useState } from 'react'
import { useFormContext } from "react-hook-form";
import styles from './Inputs.module.scss'

type PasswordInputProps = {
    name: string;
    label: string;
    placeholder?: string;
}

const PasswordInput: FC<PasswordInputProps> = ({ name, label, placeholder = '' }) => {
    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow((prevState) => !prevState)
    }

    const { register } = useFormContext()

    return (
        <div className={styles.wrapper}>
            <label className={styles.wrapper__label} htmlFor={name}>{label}</label>
            <input className={styles.wrapper__input} placeholder={placeholder} type={show ? 'text' : 'password'} id={name} {...register(name)} />
            <button className={styles.wrapper__button} type="button" onClick={toggleShow}>
                {show ? 'hide' : 'show'}
            </button>
        </div>
    )
}

export default PasswordInput