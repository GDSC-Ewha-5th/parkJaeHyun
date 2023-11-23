import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faPenNib } from '@fortawesome/free-solid-svg-icons';

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
`;

const SearchButton = styled.button`
  font-size: 20px;
  background-color: white;
  border: none;
  cursor: pointer;
  padding : 18px;
`;

const RightAlignedIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 86% ;
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
    },
    // 계속해서 원하는 만큼 복사하여 추가해주세요!
  ];
  

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
          <PostingCard key={post.id}>
            <Image src={post.image} alt="post" />
            <div>
              <Title>{post.title}</Title>
              <Content>{post.content}</Content>
            </div>
          </PostingCard>
        ))}
         </MainWrapper>
      
    </>
  );
}

export default App;
