import { FC } from "react"
import styles from './SignInForm.module.scss'
import { PasswordInput } from "../../shared";
import { EmailInput } from "../../shared";
import { CheckBoxInput } from '../../shared';
import { useForm, FormProvider } from "react-hook-form"
import Button from '../../shared/ui/Button/Button';
import titleimg from "../../assets/img/titleImgSignIn.jpg";
import { IUser } from '../../types/auth/authenticationDTO';
import { Theme, useTheme } from "../../app/providers/ThemeProvide";
type SignInFormProps = {
  onSubmit: (data: IUser) => void;
};

const SignInForm: FC<SignInFormProps> = ({ onSubmit }) => {
  const methods = useForm<IUser>();
  const { theme } = useTheme();

  const themeButton = theme === Theme.DARK ? {
    color: "#090909",
    backgroundColor: "#e9890c",
  }: undefined;

  const styleBtn = {
    width: "336px",
    height: "56px",
    backgroundColor: "#1676F3",
    color: "white",
  }

  return (
    <div className={styles.wrap_signIn}>
      <img src={titleimg} alt="title img)" test-id="titleImg" />
      <div className={styles.title_signIn}>
        <h2>Log in to your Account</h2>
        <h3>Welcome back, please enter your details.</h3>
      </div>
      <FormProvider {...methods}>
        <form data-testid="form" onSubmit={methods.handleSubmit(onSubmit)}>
          <EmailInput
            name="username"
            label="Email Address"
            placeholder="Email Address"
          />
          <PasswordInput
            name="password"
            label="Password"
            placeholder="Password"
          />
          <div className={styles.checkbox_conteiner}>
            <CheckBoxInput name="checkbox" label="Remember me" />
            <span className={styles.checkbox_text}>{<a href="#" style={{ textDecoration: 'none', color: 'rgba(22, 118, 243, 1)' }}>Forgot Password?</a>}</span>
          </div>
          <Button
            text="Log in"
            styleBtn={styleBtn}
            theme={themeButton}
            onSubmit={methods.handleSubmit(onSubmit)}
          ></Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default SignInForm;
