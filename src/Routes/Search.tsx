// import { useLocation, useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { allImagesState } from "../atom";

const Wrapper = styled.div`
  width: 1000px;
  height: 200vh;
  max-width: 1200px;
  margin: 20px auto;
  margin-top: 180px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 4px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #007bff;
  margin-left: 20px;
  color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  opacity: 0.8;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;

const Gallery = styled.div`
  margin-top: 30px;
  display: grid; /* 3개씩 표시하도록 그리드 설정 */
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  padding: 0 18px 0 18px;
`;

const ImageCard = styled.div`
  height: 320px;
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


function Search() {
  // const { search } = useLocation();
  // const [searchParams] = useSearchParams();
  // const keyword = searchParams.get("keyword");
  // console.log(keyword);
  const allImages = useRecoilValue(allImagesState);
  return (
    <Wrapper>
      <Form>
        <Input placeholder="Search Images.." />
        <Button>Search</Button>
      </Form>
      <Gallery>
        {allImages.map((item) => (
          <ImageCard key={item.id}>
            <Img style={{ backgroundImage: `url(${item.image})` }} />
            {item.translated_caption && (
              <Caption>{item.translated_caption}</Caption>
            )}
            <Caption>{item.translated_caption}</Caption>
          </ImageCard>
        ))}
      </Gallery>
    </Wrapper>
  );
}

export default Search;
