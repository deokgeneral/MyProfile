import { initializeApp } from 'firebase/app';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import './visit.css';

const firebaseConfig = {
  apiKey: "AIzaSyAnavHdGdZ1re9PnvIk2xYz9F4UI_JiHJI",
  authDomain: "deok-s-portfolio.firebaseapp.com",
  projectId: "deok-s-portfolio",
  storageBucket: "deok-s-portfolio.appspot.com",
  messagingSenderId: "1074753454322",
  appId: "1:1074753454322:web:24d1e714952ef39104106b",
  measurementId: "G-FB4HQB6P14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Visit() {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  const [visits, setVisits] = useState([]);

  const fetchVisits = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'visitItem'));
      const fetchedVisits = [];
      querySnapshot.forEach(doc => {
        fetchedVisits.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setVisits(fetchedVisits);
    } catch (error) {
      console.error("Error fetching visits: ", error);
    }
  };

  useEffect(() => {
    fetchVisits();
  }, []);

  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newDate, setNewDate] = useState(getCurrentDate());

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };
  const handleAddVisit = async (e) => {
    e.preventDefault(); // 기본 동작 방지

    if (newName.trim() === '' || newComment.trim() === '' || newDate.trim() === '') {
      alert('이름, 댓글을 모두 입력해주세요.');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "visitItem"), {
        name: newName,
        comment: newComment,
        date: newDate
      });
      console.log("Document written with ID: ", docRef.id);

      const newEntry = {
        id: docRef.id,
        name: newName,
        comment: newComment,
        date: newDate
      };

      setVisits([...visits, newEntry]);
      setNewName('');
      setNewComment('');
      setNewDate(getCurrentDate());

      alert('방문기록이 완료 되었습니다!');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('방문기록을 추가하는 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className='visit-container'>
      <div className='visit-title'>
        <h2>방명록</h2>
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
                    <p className='visit-info-title'>방문자 : <span>{visit.name}</span></p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='visit-add-info-content'>
      <form className='visit-add-info' onSubmit={handleAddVisit}>
        <input
          type='text'
          placeholder='댓글을 입력하세요'
          value={newComment}
          onChange={handleCommentChange}
          className='visit-add-info-comments'
        />
        <div className='visit-add-info-title-date'>
          <p className='visit-add-info-date'>작성날짜 : {getCurrentDate()}</p>
          <p>방문자 : <input
            type='text'
            placeholder=' 방문자'
            value={newName}
            onChange={handleNameChange}
            className='visit-add-info-name'
          />
          </p>
          <button type='submit' className='visit-add-info-button'>등록하기</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Visit;
