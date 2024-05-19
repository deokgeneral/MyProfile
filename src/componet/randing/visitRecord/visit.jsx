import React, { useState } from 'react';
import './visit.css';

function Visit() {
  // 현재 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  const [visits, setVisits] = useState([
    { id: 1, name: '구예림', comment: '안녕하세요!', date: getCurrentDate() },
  ]);

  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newDate, setNewDate] = useState(getCurrentDate());

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleDateChange = (e) => {
    setNewDate(e.target.value);
  };

  const handleAddVisit = (e) => {
    e.preventDefault(); // 기본 동작 방지

    if (newName.trim() === '' || newComment.trim() === '' || newDate.trim() === '') {
      alert('이름, 댓글를 모두 입력해주세요.');
      return;
    }

    const newId = visits.length > 0 ? visits[visits.length - 1].id + 1 : 1;

    const newEntry = {
      id: newId,
      name: newName,
      comment: newComment,
      date: newDate
    };

    setVisits([...visits, newEntry]);
    setNewName('');
    setNewComment('');
    setNewDate(getCurrentDate()); // 추가 후 날짜 초기화

    alert('방문기록이 완료 되었습니다!');
  };

  return (
    <div className='visit-container'>
      <div className='visit-title'>
        <h2>방문해주신 분들</h2>
      </div>
      <div className='visit-content'>
      <div className='visitor-list'>
        <ul>
          {visits.map(visit => (
            <li key={visit.id}>
              <div className='visit-info'>
                <p className='visit-info-comments'>{visit.comment}</p>
                <div className='visit-info-title-date'>
                <p className='visit-info-date'>작성날짜 : {visit.date}</p>
                <h3 className='visit-info-title'>방문자 : <span>{visit.name}</span></h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
        <form className='visit-add-info' onSubmit={handleAddVisit}>
        <button type='submit' className='visit-add-info-button'> +</button>
        <input
          type='text'
          placeholder='댓글을 입력하세요'
          value={newComment}
          onChange={handleCommentChange}
          className='visit-add-info-comments'
          />
        <div className='visit-add-info-title-date'>
          <p className='visit-add-info-date'>작성날짜 : {getCurrentDate()}</p>
          방문자 : <input
          type='text'
          placeholder=' 방문자'
          value={newName}
          onChange={handleNameChange}
          className='visit-add-info-name'
          />
        </div>
        </form>
      </div>
    </div>
  );
}

export default Visit;
