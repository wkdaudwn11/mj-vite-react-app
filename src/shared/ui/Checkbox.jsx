import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/shared/lib';

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {import('@radix-ui/react-checkbox').CheckboxProps} [props.rest]
 */
const Checkbox = ({ className, ...rest }) => (
  <CheckboxPrimitive.Root
    data-slot='checkbox'
    className={cn(
      'peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary',
      className
    )}
    {...rest}
  >
    <CheckboxPrimitive.Indicator
      data-slot='checkbox-indicator'
      className='flex items-center justify-center text-current transition-none'
    >
      <CheckIcon className='size-3.5' />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);

export { Checkbox };
