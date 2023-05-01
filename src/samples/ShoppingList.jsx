import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4em;
  background: papayawhip;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const List = [
  {
    id: 1,
    title: "Apple",
    isFruit: false,
  },
  {
    id: 2,
    title: "Banana",
    isFruit: true,
  },
  {
    id: 3,
    title: "Melon",
    isFruit: true,
  },
  {
    id: 4,
    title: "Orange",
    isFruit: true,
  },
];

export default function ShoppingList() {
  const ListItems = List.map((item) => (
    <li
      key={item.id}
      style={{
        color: item.isFruit ? "magenta" : "darkGreen",
      }}
    >
      <h2>{item.title}</h2>
    </li>
  ));

  return (
    <Container>
      <Wrapper>
        <h1>Shopping List</h1>
        <ul>{ListItems}</ul>
      </Wrapper>
    </Container>
  );
}
