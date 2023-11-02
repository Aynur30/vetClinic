import { FC } from 'react'
import { useFormContext } from "react-hook-form";
import styles from './Inputs.module.scss'

type EmailInputProps = {
    name: string;
    label: string;
    placeholder?: string;
}

const EmailInput: FC<EmailInputProps> = ({ name, label, placeholder = '' }) => {

    const { register } = useFormContext()

    return (
        <div className={styles.wrapper}>
            <label className={styles.wrapper__label} htmlFor={name}>{label}</label>
            <input className={styles.wrapper__input} placeholder={placeholder} type='email' id={name} {...register(name)} />
        </div>
    )
}

export default EmailInput