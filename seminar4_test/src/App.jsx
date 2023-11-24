import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
`;
const PostingCard = styled.div`
  flex: 0 0 calc(20% - 16px); /* 간격 제외한 크기 계산 (20% 너비로 설정하되, 간격을 제외한 크기 계산) */
  margin-bottom: 20px; /* 아래 여백 추가 */
  border: 1px solid lightgray;
  padding: 10px;
  background: white;
  box-sizing: border-box; /* padding, border를 포함한 크기 적용 */
`;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* 공간을 꽉 채워주는 속성 */
  gap: 16px; /* 간격 조정 */
  padding: 0 8px; /* 양쪽 여백 추가 */
`;

const Logo = styled.h1`
  font-size: 28px;
  transition: color 0.3s ease; /* 부드러운 전환 효과 */
  
  &:hover {
    color:pink; /* 마우스를 올렸을 때 원하는 색상으로 변경하세요 */
    /* 또는 마우스를 올렸을 때 원하는 스타일로 변경하세요 */
  }
`;
const SearchButton = styled.button`
  font-size: 20px;
  background-color: white;
  border: none;
  cursor: pointer;
  padding : 18px;
  transition: color 0.3s ease; /* 부드러운 전환 효과 */
  
  &:hover {
    color:pink; 
  }
`;

const RightAlignedIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 86% ;
`;

const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  background-color: white;
  padding: 20px;
`;


const Title = styled.p`
  font-weight: bold;
`;

const Content = styled.p`
  color: black;
  font-size: 15px;
`;

const Image = styled.img`
  width: 100%; /* 이미지를 포스팅 카드에 맞게 확장 */
  height: auto; /* 비율 유지 */
  
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color : black;
`;
function App() {
  const posts = [
    {
      id: 1,
      title: '프론트엔드 개발자의 끝? V0.dev 사용법',
      content: '프론트엔드 개발자의 일자리를 위협하는 V0의 등장',
      image: '캡처3.PNG',
    },
    {
      id: 2,
      title: '프론트엔드 개발자의 끝? V0.dev 사용법',
      content: '프론트엔드 개발자의 일자리를 위협하는 V0의 등장',
      image: '캡처3.PNG',
    },
    {
      id: 3,
      title: '프론트엔드 개발자의 끝? V0.dev 사용법',
      content: '프론트엔드 개발자의 일자리를 위협하는 V0의 등장',
      image: '캡처3.PNG',
    },
    {
      id: 4,
      title: '프론트엔드 개발자의 끝? V0.dev 사용법',
      content: '프론트엔드 개발자의 일자리를 위협하는 V0의 등장',
      image: '캡처3.PNG',
    },
    {
      id: 5,
      title: '프론트엔드 개발자의 끝? V0.dev 사용법',
      content: '프론트엔드 개발자의 일자리를 위협하는 V0의 등장',
      image: '캡처3.PNG',
    },
    {
      id: 6,
      title: '프론트엔드 개발자의 끝? V0.dev 사용법',
      content: '프론트엔드 개발자의 일자리를 위협하는 V0의 등장',
      image: '캡처3.PNG',
    },
    {
      id: 7,
      title: '프론트엔드 개발자의 끝? V0.dev 사용법',
      content: '프론트엔드 개발자의 일자리를 위협하는 V0의 등장',
      image: '캡처3.PNG',
    },
    {
      id: 8,
      title: '프론트엔드 개발자의 끝? V0.dev 사용법',
      content: '프론트엔드 개발자의 일자리를 위협하는 V0의 등장',
      image: '캡처3.PNG',
    },
    {
      id: 9,
      title: '프론트엔드 개발자의 끝? V0.dev 사용법',
      content: '프론트엔드 개발자의 일자리를 위협하는 V0의 등장',
      image: '캡처3.PNG',
    },
    {
      id: 10,
      title: '프론트엔드 개발자의 끝? V0.dev 사용법',
      content: '프론트엔드 개발자의 일자리를 위협하는 V0의 등장',
      image: '캡처3.PNG',
    },
    {
      id: 11,
      title: '프론트엔드 개발자의 끝? V0.dev 사용법',
      content: '프론트엔드 개발자의 일자리를 위협하는 V0의 등장',
      image: '캡처3.PNG',
    },
    {
      id: 12,
      title: '프론트엔드 개발자의 끝? V0.dev 사용법',
      content: '프론트엔드 개발자의 일자리를 위협하는 V0의 등장',
      image: '캡처3.PNG',
    },
    {
      id: 13,
      title: '프론트엔드 개발자의 끝? V0.dev 사용법',
      content: '프론트엔드 개발자의 일자리를 위협하는 V0의 등장',
      image: '캡처3.PNG',
    },
    {
      id: 14,
      title: '프론트엔드 개발자의 끝? V0.dev 사용법',
      content: '프론트엔드 개발자의 일자리를 위협하는 V0의 등장',
      image: '캡처3.PNG',
    },
    {
      id: 15,
      title: '프론트엔드 개발자의 끝? V0.dev 사용법',
      content: '프론트엔드 개발자의 일자리를 위협하는 V0의 등장',
      image: '캡처3.PNG',
    },];
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    // 모달이 열렸을 때 body 요소에 overflow: hidden을 적용하여 스크롤을 막음
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      // 모달이 닫혔을 때 body 요소의 overflow를 visible로 설정하여 스크롤 복구
      document.body.style.overflow = 'visible';
    }

    // 컴포넌트 언마운트 시에도 스크롤 복구 처리
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [showModal]); // showModal 상태에 변화가 있을 때마다 실행

 
  return (
    <>
      <Header>
        <Logo>Velog</Logo>
        <RightAlignedIcons>
        <SearchButton><FontAwesomeIcon icon={faSearch} /></SearchButton>
        <SearchButton><FontAwesomeIcon icon={faUser} /></SearchButton>
        <SearchButton onClick={() => { /* 클릭 시 동작할 내용 */ }}><FontAwesomeIcon icon={faPenNib} /></SearchButton>
        <SearchButton><i className="fas fa-search"></i></SearchButton>
        </RightAlignedIcons>
      </Header>
      
      <MainWrapper>
        {posts.map((post) => (
          <PostingCard key={post.id} onClick={() => openModal('모달이미지.png')}> {/* 이미지 클릭 시 모달 열기 */}
            <Image src={post.image} alt="post" />
            <div>
              <Title>{post.title}</Title>
              <Content>{post.content}</Content>
            </div>
          </PostingCard>
        ))}
      </MainWrapper>
      {showModal && (
    <Modal>
    <ModalContent>
      <img src={modalImage} alt="modal" />
      <CloseButton onClick={closeModal}>X</CloseButton> {/* X 버튼 추가 */}
    </ModalContent>
  </Modal>
      )}
      
    </>
  );
}

export default App;