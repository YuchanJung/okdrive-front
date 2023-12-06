import { url } from "inspector";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { allImagesState } from "../atom";

const Wrapper = styled.div`
  width: 1200px;
  height: 200vh;
  max-width: 1200px;
  margin: 20px auto;
  margin-top: 200px;
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
  height: 400px;
  border: 1.5px solid #5f5b5b49;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Img = styled.div`
  width: 100%;
  height: 300px;
`;

const Caption = styled.div`
  font-size: 24px;
  font-weight: 200;
  color: black;
  margin-bottom: 20px;
`;


function Home() {
  const allImages = useRecoilValue(allImagesState);
  return (
    <Wrapper>
      <Gallery>
        {allImages.map((item) => (
          <ImageCard key={item.id}>
            <Img style={{}}>
            </Img>
            <Caption>{item.translated_caption}</Caption>
          </ImageCard>
        ))}
      </Gallery>
    </Wrapper>
  );
}

export default Home;
