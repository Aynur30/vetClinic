import { FC } from "react"
import SignUpForm from "../widgets/Forms/SignUpForm"
import { SignUpLayout } from "../layout/SignUpLayout/SignUpLayout";

const SignUpPage: FC = () => {
  const handleSubmit = () => { };

  return (
    <SignUpLayout>
      <SignUpForm onSubmit={handleSubmit} />
    </SignUpLayout>
  )
}

export default SignUpPage;