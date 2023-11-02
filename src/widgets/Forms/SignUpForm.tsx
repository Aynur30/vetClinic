import { FC } from "react"
import styles from './SignInForm.module.scss'
import { CheckBoxInput, TextInput, EmailInput, PasswordInput } from '../../shared';
import { useForm, FormProvider } from "react-hook-form"
import Button from '../../shared/ui/Button/Button';
import titleimg from "../../assets/img/titleImgSignIn.jpg";

type SignUpFormProps = {
  onSubmit: () => void;
};

const SignUpForm: FC<SignUpFormProps> = ({ onSubmit }) => {
  const methods = useForm();

  return (
    <div className={styles.wrap_signIn}>
      <img src={titleimg} alt='title img)' test-id='titleImg' />
      <div className={styles.title_signIn}>
        <h2>Create an Account</h2>
        <h3>Sign up now to get started with an account.</h3>
      </div>
      <FormProvider {...methods}>
        <form data-testid='form' onSubmit={methods.handleSubmit(onSubmit)}>
          <TextInput name='fullname' label='Full Name' placeholder='Full name' />
          <EmailInput name="email" label="Email Address" placeholder="Email Address" />
          <PasswordInput name="password" label="Password" placeholder="Password" />
          <PasswordInput name="confirmpassword" label="Confirm Password" placeholder="Confirm Password" />
          <div className={styles.checkbox_conteiner}>
            <CheckBoxInput name='checkbox' label={`I have read and agree to the `} />
            <span className={styles.checkbox_text}>{<a href="#" style={{ color: 'rgba(22, 118, 243, 1)', marginRight: '50px' }}>Terms of service</a>}</span>
          </div>
          <Button text='Get Started' styleBtn={{ width: '336px', height: '56px', backgroundColor: '#1676F3', color: 'white' }} onSubmit={methods.handleSubmit(onSubmit)}></Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default SignUpForm;