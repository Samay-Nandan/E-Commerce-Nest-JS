export interface LoginFormDto {
  email: string;
  password: string;
}

export interface LoginFormInputDto {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  inputStyles: string;
  labelStyles: string;
  errorStyles: string;
  autoComplete: string;
  error: string | undefined;
}
