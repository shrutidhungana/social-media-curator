export type FilterOption ={
  label: string;
  value: string;
}

export type FilterProps = {
  options: FilterOption[];
  selected?: string;
  onChange: (value: string) => void;
  className?: string;
}
