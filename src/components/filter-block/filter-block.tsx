type FilterBlockProps = {
  filterableColumns: string[];
  currentFilterOption: string;
  onChange: (option: string, value: string) => void;
};

export const FilterBlock = ({
  filterableColumns,
  currentFilterOption,
  onChange,
}: FilterBlockProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange(currentFilterOption, event.target.value)
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
      />
      <select id="filter-select">
        {filterableColumns.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
