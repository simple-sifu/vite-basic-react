import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [stopFlag, setStopFlag] = useState(false);

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (stopFlag || count === 10) {
        return;
      }
      setCount((c) => c + 1); //
    }, 1000);
    return () => clearInterval(intervalId);
  }, [stopFlag, count]);

  const clickHandler = () => {
    setStopFlag(true);
  };

  return (
    <Container>
      <Wrapper>
        <Title>{count}</Title>
        <button onClick={clickHandler}>STOP</button>
      </Wrapper>
    </Container>
  );
}
