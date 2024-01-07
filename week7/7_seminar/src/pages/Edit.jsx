import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const foundNote = existingNotes.find((item) => item.id === parseInt(id));
    if (foundNote) {
      setTitle(foundNote.title);
      setContent(foundNote.content);
    }
  }, [id]);

  const handleSaveEdit = () => {
    const updatedNote = {
      id: parseInt(id),
      title,
      content,
      updatedAt: new Date().toLocaleString(), // 수정 시간 설정
    };
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = existingNotes.map((item) =>
      item.id === updatedNote.id ? updatedNote : item
    );
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    navigate('/'); // 메인페이지로 이동
  };

  const handleDeleteNote = () => {
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = existingNotes.filter((item) => item.id !== parseInt(id));
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    navigate('/'); // 메인페이지로 이동
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
        <div className="edit-container" style={{ textAlign: 'center' }}>
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
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={handleSaveEdit} style={{ backgroundColor: '#888', color: '#fff', padding: '8px 16px', borderRadius: '5px', border: 'none', margin: '10px' }}>Save</button>
            <button onClick={handleDeleteNote} style={{ backgroundColor: '#888', color: '#fff', padding: '8px 16px', borderRadius: '5px', border: 'none', margin: '10px' }}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
