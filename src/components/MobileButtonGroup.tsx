
import React from 'react';
import { Button } from '@/components/ui/button';

interface MobileButtonGroupProps {
  primaryButton?: {
    text: string;
    onClick?: () => void;
    href?: string;
    variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
    href?: string;
    variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
  };
  className?: string;
}

const MobileButtonGroup: React.FC<MobileButtonGroupProps> = ({
  primaryButton,
  secondaryButton,
  className = ''
}) => {
  const renderButton = (button: any, isPrimary: boolean = false) => {
    const buttonProps = {
      className: `w-[280px] md:w-auto rounded-full ${isPrimary ? 'bg-[#4a1403] hover:bg-white hover:text-[#4a1403] border-2 border-[#4a1403] text-white' : 'border-2 border-[#4a1403] bg-white text-[#4a1403] hover:bg-[#4a1403] hover:text-white'}`,
      variant: button.variant || (isPrimary ? 'default' : 'outline'),
      onClick: button.onClick
    };

    if (button.href) {
      return (
        <Button key={button.text} asChild {...buttonProps}>
          <a href={button.href}>{button.text}</a>
        </Button>
      );
    }

    return (
      <Button key={button.text} {...buttonProps}>
        {button.text}
      </Button>
    );
  };

  return (
    <div className={`flex flex-col md:flex-row items-center justify-center gap-4 ${className}`}>
      {primaryButton && renderButton(primaryButton, true)}
      {secondaryButton && renderButton(secondaryButton, false)}
    </div>
  );
};

export default MobileButtonGroup;
