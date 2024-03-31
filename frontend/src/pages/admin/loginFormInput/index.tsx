import { forwardRef, memo } from 'react';
import { LoginFormInputDto } from '@admin/dto';

export const LoginFormInput = memo(
  forwardRef<HTMLInputElement, LoginFormInputDto>(
    (
      {
        type,
        name,
        placeholder,
        label,
        inputStyles,
        labelStyles,
        errorStyles,
        autoComplete,
        error,
        ...rest
      },
      ref
    ) => (
      <div>
        <label className={labelStyles} htmlFor={name}>
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          name={name}
          id={name}
          aria-label={label}
          className={inputStyles}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...rest}
        />
        {error && <p className={errorStyles}>{error}</p>}
      </div>
    )
  )
);
