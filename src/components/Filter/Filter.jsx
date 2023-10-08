import { Info, Input } from "./Filter.styled";

export function Filter({ onChange, value }) {
  return (
    <div>
      <Info>Find contacts by name</Info>
      <Input
        type="text"
        onChange={onChange}
        value={value}
        name="filter"
      />
    </div>
  );
}