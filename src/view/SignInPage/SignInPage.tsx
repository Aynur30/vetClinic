import { FC, useEffect } from "react"
import SignInForm from "../../widgets/Forms/SignInForm"
import { useAuthMutation } from "../../services/auth/authentication.api"
import { IUser } from "../../types/auth/authenticationDTO"
import SignInPageLayout from '../../layout/SignInPageLayout/SignInPageLayout';
import { useAppSelector } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
const SignInPage: FC = () => {

    const [auth] = useAuthMutation()
    const role = useAppSelector((state) => state.auth.role);
    const navigate = useNavigate();

    useEffect(() => {
        if (role !== null) {
          navigate(`/${role.toLowerCase()}`);
        }
      }, [navigate, role]);

    const handleSubmit = async (data: IUser) => {
        try {
            const result = await auth(data)
            console.log(result)
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <SignInPageLayout
          children={<SignInForm onSubmit={handleSubmit} />}
        ></SignInPageLayout>
      );
}

export default SignInPage