import { FC } from 'react'
import { useForm } from "react-hook-form";
import styles from './Inputs.module.scss'

type CheckBoxInputProps = {
    name: string;
    label: string;
}

const CheckBoxInput: FC<CheckBoxInputProps> = ({ name, label }) => {

    const { register } = useForm()

    return (
        <div className={styles.checkboxWrapper}>
            <input className={styles.checkboxWrapper__input} type='checkbox' id={name} {...register(name)} />
            <label className={styles.checkboxWrapper__label} htmlFor={name}>{label}</label>
        </div>
    )
}

export default CheckBoxInput