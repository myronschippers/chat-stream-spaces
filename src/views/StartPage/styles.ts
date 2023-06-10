import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background-color: #eee;

  h1 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .users {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    margin: 0 auto;
  }

  .user {
    display: flex;
    flex-direction: column;
  }

  .user--avatar {
    box-sizing: border-box;
    width: 54px;
    height: 54px;
    margin-bottom: 5px;
    border-radius: 50%;
    border: 4px solid transparent;
    overflow: hidden;
    position: relative;

    img {
      width: 105%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  .user--name {
    margin: 0 auto;
    padding-bottom: 3px;
    border-bottom: 4px solid transparent;
    text-align: center;
  }

  .user:hover {
    & .user--avatar,
    & .user--name {
      border-color: var(--color-action);
    }
  }
`;
