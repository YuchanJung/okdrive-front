import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { allImagesState } from "../atom";

const Wrapper = styled.div`
  width: 1000px;
  height: 200vh;
  max-width: 1000px;
  margin: 20px auto;
  margin-top: 180px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Gallery = styled.div`
  margin-top: 30px;
  display: grid; /* 3개씩 표시하도록 그리드 설정 */
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  padding: 0 18px 0 18px;
`;

const ImageCard = styled.div`
  height: 360px;
  border: 1.5px solid #5f5b5b49;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Img = styled.div`
  width: 100%;
  height: 280px;
`;

const Caption = styled.div`
  font-size: 24px;
  font-weight: 200;
  color: black;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 2px 0 rgba(0, 0, 0, 0.15);
  background-color: ${(props) => props.theme.indigo.lighter};
  color: white;
  font-size: 14px;
  margin-bottom: 15px;
  opacity: 0.7;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;

function Delete() {
  const allImages = useRecoilValue(allImagesState);
  return (
    <Wrapper>
      <Gallery>
        {allImages.map((item) => (
          <ImageCard key={item.id}>
            <Img style={{}}></Img>
            <Caption>{item.translated_caption}</Caption>
            <Button>Delete</Button>
          </ImageCard>
        ))}
      </Gallery>
    </Wrapper>
  );
}

export default Delete;
