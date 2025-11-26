import React, { useState } from "react";
import { Layout } from "../layout";
import cm from "./alert.module.css";

export type AlertVariant = "Info" | "Warning" | "Success" | "Danger";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional className for adding custom CSS classes to the Alert element */
  className?: string;
  /** Variant of the alert. Defaults to 'Info'. */
  variant?: AlertVariant;
  /** Whether to show the icon. Defaults to true. */
  icon?: boolean;
  /** Whether to show the link. Defaults to true. */
  link?: boolean;
  /** Whether the alert is dismissible. Defaults to true. */
  dismissible?: boolean;
  /** The main text content of the alert */
  text?: string;
  /** The label for the link. Defaults to 'Link'. */
  linkLabel?: string;
  /** Custom content. When provided, text and linkLabel are ignored. */
  children?: React.ReactNode;
  /** Callback fired when the alert is dismissed */
  onDismiss?: () => void;
}

const InfoIcon = ({ className }: { className?: string }) => {
  const iconClassName = className 
    ? `${cm.alertIcon} ${className}` 
    : cm.alertIcon;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClassName}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
};

const WarningIcon = ({ className }: { className?: string }) => {
  const iconClassName = className 
    ? `${cm.alertIcon} ${className}` 
    : cm.alertIcon;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClassName}
      aria-hidden="true"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
};

const SuccessIcon = ({ className }: { className?: string }) => {
  const iconClassName = className 
    ? `${cm.alertIcon} ${className}` 
    : cm.alertIcon;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClassName}
      aria-hidden="true"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
};

const DangerIcon = ({ className }: { className?: string }) => {
  const iconClassName = className 
    ? `${cm.alertIcon} ${className}` 
    : cm.alertIcon;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClassName}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
};

const DismissIcon = ({ className }: { className?: string }) => {
  const iconClassName = className 
    ? `${cm.alertIcon} ${className}` 
    : cm.alertIcon;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClassName}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};

const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

const variantClassMap: Record<AlertVariant, string> = {
  'Info': 'alert--info',
  'Warning': 'alert--warning',
  'Success': 'alert--success',
  'Danger': 'alert--danger',
};

export const Alert = ({ 
  className, 
  variant = 'Info',
  icon = true,
  link = true,
  dismissible = true,
  text = 'Emphasized description.',
  linkLabel = 'Link',
  children,
  onDismiss,
  ...props 
}: AlertProps) => {
  const [isDismissed, setIsDismissed] = useState(false);

  const handleDismiss = () => {
    setIsDismissed(true);
    onDismiss?.();
  };

  if (isDismissed) {
    return null;
  }

  const variantClass = cm[variantClassMap[variant]] || cm['alert--info'];
  const rootClassName = composeClassName(
    `${cm.alert} ${variantClass}`,
    className
  );

  const hasCustomContent = children !== undefined;

  return (
    <div className={rootClassName} role="alert" {...props}>
      <Layout className={cm.alertContainer}>
        <div className={cm.alertLeft}>
          {icon && (
            <div className={cm.alertIconContainer}>
              {variant === 'Info' && <InfoIcon />}
              {variant === 'Warning' && <WarningIcon />}
              {variant === 'Success' && <SuccessIcon />}
              {variant === 'Danger' && <DangerIcon />}
            </div>
          )}
          <div className={cm.alertContent}>
            {hasCustomContent ? (
              children
            ) : (
              <>
                <span className={cm.alertText}>{text}</span>
                {link && (
                  <a href="#" className={cm.alertLink} onClick={(e) => e.preventDefault()}>
                    {linkLabel}
                  </a>
                )}
              </>
            )}
          </div>
        </div>
        {dismissible && (
          <div className={cm.alertDismissContainer}>
            <button
              type="button"
              onClick={handleDismiss}
              className={cm.alertDismissButton}
              aria-label="Dismiss alert"
            >
              <DismissIcon />
            </button>
          </div>
        )}
      </Layout>
    </div>
  );
};

Alert.displayName = 'Alert';


