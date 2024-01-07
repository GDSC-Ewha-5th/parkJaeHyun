import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Write = () => {
  const history = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSaveNote = () => {
    const note = {
      id: new Date().getTime(), // 고유 아이디 설정
      title,
      content,
      createdAt: new Date().toLocaleString(), // 생성 시간 설정
      updatedAt: new Date().toLocaleString(), // 수정 시간 설정
    };
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = [...existingNotes, note];
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    history('/'); // 메인 페이지로 이동
  };

  return (
    <div className="home-container" style={{ backgroundColor: '#f8f4e8', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="pink-background" style={{
        border: '2px solid #f5f5f5',
        padding: '80px', /* 크기 조정 */
        borderRadius: '20px', /* 각진 정사각형 형태로 변경 */
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' /* 그림자 효과 추가 */
      }}>
        <h1 style={{ fontSize: '3em', margin: '20px' }}>Notes App</h1>
        <div className="write-container" style={{ textAlign: 'center' }}>
          <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              margin: '10px',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #f5f5f5',
              width: '80%',
              maxWidth: '500px',
              fontSize: '1.2em' /* 텍스트 크기 조정 */
            }}
          />
          <textarea
            placeholder="내용을 입력하세요..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              margin: '10px',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #f5f5f5',
              width: '80%',
              maxWidth: '500px',
              height: '200px',
              fontSize: '1.2em' /* 텍스트 크기 조정 */
            }}
          ></textarea>
          <button onClick={handleSaveNote} style={{ backgroundColor: '#888', color: '#fff', padding: '8px 16px', borderRadius: '5px', border: 'none', margin: '10px' }}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default Write;
