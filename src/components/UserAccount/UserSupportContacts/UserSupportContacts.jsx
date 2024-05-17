import { Link, List, ListItem, PhoneNumber, Text } from "./UserSupportContacts.styled";

/* eslint-disable react/no-unescaped-entities */
const UserSupportContacts = () => {
  return (
    <>
      <Text>Зв'язатися з нами ви завжди можете за допомогою:</Text>
      <List>
        <ListItem>
          <p>
            контактних телефонів <PhoneNumber href="tel:0800237556">(0(800) 23 75 56</PhoneNumber>,{" "}
            <PhoneNumber href="tel:0442375568">(044) 23 75 568)</PhoneNumber>
          </p>
        </ListItem>
        <ListItem>
          <p>надіслати свій запит/скаргу/пропозицію за допомогою такої форми</p>
        </ListItem>
        <ListItem>
          <p>написати нам на пошту <Link href="mailto:pulseRun@gmail.com">pulseRun@gmail.com</Link></p>
        </ListItem>
        <ListItem>
          <p>чат-боту <Link href="https://t.me/example_user">Telegram</Link></p>
        </ListItem>
      </List>
    </>
  );
};

export default UserSupportContacts;
