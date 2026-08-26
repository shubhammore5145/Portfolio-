// ============================================
// BUTTON COMPONENT — Reusable button with variants
// ============================================

import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  iconRight,
  disabled = false,
  download,
  target,
  rel,
  className = '',
  id,
  type = 'button',
  ...props
}) => {
  const classNames = `btn btn-${variant} btn-${size} ${className}`.trim();

  if (href) {
    return (
      <a
        id={id}
        href={href}
        className={classNames}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        download={download}
        {...props}
      >
        {icon && <span className="btn-icon">{icon}</span>}
        <span className="btn-text">{children}</span>
        {iconRight && <span className="btn-icon-right">{iconRight}</span>}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span className="btn-text">{children}</span>
      {iconRight && <span className="btn-icon-right">{iconRight}</span>}
    </button>
  );
};

export default Button;
