import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1000px;
  height: 400px;
  max-width: 1000px;
  margin: 20px auto;
  margin-top: 180px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 15px;
  color: ${(props) => props.theme.gray};
  font-size: 42px;
  margin-bottom: 15px;
`;

const UploadForm = styled.form`
  width: 800px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const InputButton = styled.div`
  width: 200px;
  height: 40px;
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background-color: #c3c3c3a2;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 400;
  transition: 0.3s;
  color: black;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

const FileLog = styled.div`
  margin-top: 10px;
  color: #555;
  font-style: italic;
`;

const GenerateButton = styled.div`
  width: 200px;
  height: 40px;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
  opacity: 0.8;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;

const Footer = styled.footer`
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Upload() {
  const [fileLog, setFileLog] = useState("No image selected.");
  return (
    <>
      <Wrapper>
        <Title>Image Captioning with AI </Title>
        <UploadForm action="" method="POST">
            <InputButton>Choose an Image</InputButton>
            <FileLog>{fileLog}</FileLog>
            <GenerateButton>Generate Caption</GenerateButton>
        </UploadForm>
      </Wrapper>
      <Footer>Return to Home</Footer>
    </>
  );
}

export default Upload;
