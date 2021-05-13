import React from "react";
import styled from "styled-components";
import ClosePng from '../../assets/close.png'

const Layout = styled.div`
display: flex;
align-items: center;
bottom: 0;
justify-content: center;
left: 0;
overflow: hidden;
position: fixed;
right: 0;
top: 0;
display: flex;
opacity: 1;
z-index: 400;
`;



const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 5px solid #e6a681;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  min-height: 40vh;
  max-height: 75vh;
  max-width: 850px;
  align-items: center;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  margin-left: 25%;
  margin-top: 5%;
`;

export const ModalOverlay = styled.a`
  background: rgba(247, 248, 249, 0.75);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const ModalHeader = styled.div`
  height: 5vh;
  width: 100%;
  background: #e1b8a0;
  text-align: center;
  color: white; 
  font-family: Sansita;
  font-style: italic;
  font-size: 24px; 
`;



export const ModalBody = styled.div`
  overflow-y: auto;
  padding: 30px 10px;
  position: relative;
`;

export const ModalClose = styled.a`
  float: right !important;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 25px;
  margin-right: 2%;
`;


interface ModalInterface {
  showModal: boolean;
  closeModal: () => void;
  handleEsc: (e:React.KeyboardEvent<HTMLDivElement>) => void
  title: string;
}

const Modal: React.FC<ModalInterface> = ({
  showModal,
  closeModal,
  handleEsc, 
  title,
  children,
}) => {

  return (
    <React.Fragment>
      <Layout>
        <ModalOverlay >
          <ModalContainer onKeyDown={(e) => handleEsc(e)}>
            <ModalHeader>
                {title}
            <ModalClose onClick={() => closeModal()}> 
              <img src={ClosePng} alt="close-icon"/>
             </ModalClose>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </ModalContainer>
        </ModalOverlay>
      </Layout>
    
    </React.Fragment>
  );
};

export default Modal;
