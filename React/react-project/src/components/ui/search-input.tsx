import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './input';
import { cn } from '../../lib/utils';

interface SearchInputProps extends React.ComponentProps<typeof Input> {
  className?: string;
  containerClassName?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, containerClassName, ...props }, ref) => {
    return (
      <div className={cn("relative w-full max-w-[400px]", containerClassName)}>
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <Input
          ref={ref}
          type="text"
          placeholder="Search"
          className={cn(
            "pl-9 h-9 bg-gray-50/50 dark:bg-gray-800/50 border-0 ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg",
            "placeholder:text-gray-400 dark:placeholder:text-gray-500",
            "focus-visible:ring-2 focus-visible:ring-blue-500",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

export { SearchInput }; 