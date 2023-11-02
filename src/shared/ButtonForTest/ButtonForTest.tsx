import { forwardRef, ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  disabled?: boolean;
  loading?: boolean;
}

const ButtonForTest = forwardRef<HTMLButtonElement, ButtonProps>(({ disabled, loading, ...rest }, ref) => {
  return (
    <button ref={ref} disabled={disabled || loading} {...rest} />
  )
})

ButtonForTest.displayName = 'ButtonForTest'

export default ButtonForTest;