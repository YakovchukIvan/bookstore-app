import { memo } from 'react';

interface FilterInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const FilterInput = memo(({ id, label, value, onChange, placeholder }: FilterInputProps) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label={label}
    />
  </div>
));

FilterInput.displayName = 'FilterInput';
