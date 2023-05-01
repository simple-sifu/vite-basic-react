import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4em;
  background: papayawhip;
`;

const Item = styled.li`
  list-style: none;
  margin: 10px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  margin: 0px;
  font-size: 1.5em;
  text-align: center;
`;

const Img = styled.img`
  height: 100px;
  width: 100px;
`;

const imageList = [
  {
    id: 1,
    name: "Bugs Bunny",
    url: "https://i.imgur.com/pooSLpT.png",
  },
  {
    id: 2,
    name: "bad boy",
    url: "https://i.imgur.com/DCU7dEm.jpeg",
  },
  {
    id: 3,
    name: "cat",
    url: "https://i.imgur.com/sDhdhuS.jpeg",
  },
];

export default function Images() {
  return (
    <Container>
      <Wrapper>
        <Title>Images</Title>
        <ul>
          {imageList.map((image) => (
            <Item key={image.id}>
              <h2>{image.name}</h2>
              <Img src={image.url} alt={image.name} />
            </Item>
          ))}
        </ul>
      </Wrapper>
    </Container>
  );
}
