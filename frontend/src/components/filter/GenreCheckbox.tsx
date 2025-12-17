import { memo } from 'react';

interface GenreCheckboxProps {
  genre: string;
  genreUA: string;
  isChecked: boolean;
  onChange: (genre: string) => void;
}

export const GenreCheckbox = memo(({ genre, genreUA, isChecked, onChange }: GenreCheckboxProps) => (
  <div>
    <label htmlFor={`checkbox-${genre}`}>
      <input
        id={`checkbox-${genre}`}
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange(genre)}
        aria-label={`Фільтр по жанру ${genreUA}`}
      />
      <span>{genreUA}</span>
    </label>
  </div>
));

GenreCheckbox.displayName = 'GenreCheckbox';
