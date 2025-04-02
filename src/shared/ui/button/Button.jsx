import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';

import { cn } from '@/shared/lib';

import { buttonVariants } from './button.styles';

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"} [props.variant]
 * @param {"default" | "sm" | "lg" | "icon"} [props.size]
 * @param {boolean} [props.asChild]
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement> | React.ComponentPropsWithoutRef<typeof Slot>} [props.rest]
 */
export const Button = ({ className, variant, size, asChild = false, ...props }) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
