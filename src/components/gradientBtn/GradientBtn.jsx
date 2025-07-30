import './GradientBtn.scss'

export default function GradientBtn({ color='linear', className = '', children, ...rest }) {
  return (
    <button className={`gradient-btn ${'gradient-btn__'+color} ${className}`} {...rest}>
      {children}
    </button>
  )
}