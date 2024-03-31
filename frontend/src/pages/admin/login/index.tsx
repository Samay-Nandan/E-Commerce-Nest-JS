import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@src/store';
import { Routes, ImageUrl } from '@src/constant';
import { LoginValidation } from '@admin/validation';
import { loginUser } from '@store/action';
import { getAdminCookie } from '@src/utils';
import { LoginFormInput } from '@admin/loginFormInput';
import { LoginFormDto } from '@admin/dto';
import { LoginFormStyles } from '@admin/styles';

export const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormDto>();
  const { token } = getAdminCookie();
  const { admin } = useAppSelector(({ AdminReducer }) => AdminReducer);

  const loginHandler = (data: LoginFormDto) => dispatch(loginUser(data));

  useEffect(() => {
    token && navigate(Routes.home);
  }, [navigate, admin]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src={ImageUrl['login']}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(loginHandler)}>
          <LoginFormInput
            type="email"
            placeholder="example@domain.com"
            label="Email"
            inputStyles={LoginFormStyles.input}
            labelStyles={LoginFormStyles.label}
            errorStyles={LoginFormStyles.error}
            error={errors.email?.message}
            autoComplete="username"
            {...register('email', LoginValidation['email'])}
          />
          <LoginFormInput
            type="password"
            placeholder="••••••••"
            label="Password"
            inputStyles={LoginFormStyles.input}
            labelStyles={LoginFormStyles.label}
            errorStyles={LoginFormStyles.error}
            error={errors.password?.message}
            autoComplete="current-password"
            {...register('password', LoginValidation['password'])}
          />
          <button type="submit" className={LoginFormStyles.button}>
            Sign in
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-gray-500">
          <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            No account? Contact administrator to create.
          </a>
        </p>
      </div>
    </div>
  );
};
