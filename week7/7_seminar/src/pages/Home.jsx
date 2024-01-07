import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  return (
    <div className="home-container" style={{ backgroundColor: '#f8f4e8', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="pink-background" style={{
        border: '2px solid #f5f5f5',
        padding: '80px', 
        borderRadius: '20px', /* 각진 정사각형 형태로 변경 */
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' /* 그림자 효과 추가 */
      }}>

        <h1 style={{ fontSize: '3em', margin: '20px' }}>Notes App</h1>
        {/* 노트 목록 */}
        <ul style={{ padding: '0', listStyle: 'none', width: '300px' }}>
          {notes.map((note) => (
            <li key={note.id} style={{ marginBottom: '10px' }}>
              <Link to={`/edit/${note.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ backgroundColor: '#fff', borderRadius: '5px', padding: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                  <p style={{ margin: '0', fontWeight: 'bold' }}>{note.title}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {/* 노트 생성 버튼 */}
        <Link to="/write" style={{
          textDecoration: 'none',
          color: '#fff',
          fontWeight: 'bold',
          backgroundColor: '#888',
          padding: '15px 30px',
          borderRadius: '8px',
          display: 'inline-block',
          marginTop: '20px'
        }}>Create Note</Link>
      </div>
    </div>
  );
};

export default Home;
