import { List, Item, Button } from "./ContactList.styled";

export function ContactList({ contacts, onClick }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name} : {number}
          <Button
            onClick={() => onClick(id)}
            name="delete"
            type="button"
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
}