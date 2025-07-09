// src/pages/Memories.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Memories.css';
import jsPDF from 'jspdf';

const Memories = () => {
  const navigate = useNavigate();

  const [memories, setMemories] = useState([
    {
      id: 1,
      image: 'https://via.placeholder.com/300x200?text=First+Smile',
      title: 'First Smile',
      date: '2025-01-12',
      note: 'The first time baby smiled — a precious moment!',
      favorite: false,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x200?text=First+Step',
      title: 'First Step',
      date: '2025-03-21',
      note: 'Tiny steps into the world!',
      favorite: true,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newMemory, setNewMemory] = useState({ title: '', date: '', note: '', image: '', favorite: false });
  const [filter, setFilter] = useState('');

  const goBack = () => navigate(-1);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setNewMemory({ ...newMemory, image: reader.result });
    if (file) reader.readAsDataURL(file);
  };

  const addMemory = () => {
    setMemories([...memories, { ...newMemory, id: Date.now() }]);
    setShowModal(false);
    setNewMemory({ title: '', date: '', note: '', image: '', favorite: false });
  };

  const toggleFavorite = (id) => {
    setMemories(memories.map(mem => mem.id === id ? { ...mem, favorite: !mem.favorite } : mem));
  };

  const deleteMemory = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this memory?");
    if (confirmDelete) {
      setMemories(memories.filter(mem => mem.id !== id));
    }
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    memories.forEach((mem, idx) => {
      doc.text(`${mem.title} (${mem.date})`, 10, 10 + idx * 20);
      doc.text(mem.note, 10, 16 + idx * 20);
    });
    doc.save('baby_memories.pdf');
  };

  const filteredMemories = filter
    ? memories.filter(mem => mem.date.includes(filter))
    : memories;

  return (
    <div className="memories-container">
      <button className="back-button" onClick={goBack}>← Back</button>
      <h1 className="memories-title">📸 Baby Memories</h1>
      <p className="memories-subtitle">Cherish your little one's special moments</p>

      <div className="memory-controls">
        <input type="month" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <button onClick={() => setShowModal(true)}>➕ Add Memory</button>
        <button onClick={exportToPDF}>💾 Export PDF</button>
      </div>

      <div className="memories-grid">
        {filteredMemories.map((memory) => (
          <div key={memory.id} className="memory-card">
            <img src={memory.image} alt={memory.title} className="memory-image" />
            <h3 className="memory-title">{memory.title}</h3>
            <p className="memory-date">📅 {memory.date}</p>
            <p className="memory-note">{memory.note}</p>
            <div className="memory-actions">
              <button className="favorite-button" onClick={() => toggleFavorite(memory.id)}>
                {memory.favorite ? '⭐ Favorited' : '☆ Favorite'}
              </button>
              <button className="delete-button" onClick={() => deleteMemory(memory.id)}>❌ Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Memory Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New Memory</h2>
            <input
              type="text"
              placeholder="Title"
              value={newMemory.title}
              onChange={(e) => setNewMemory({ ...newMemory, title: e.target.value })}
            />
            <input
              type="date"
              value={newMemory.date}
              onChange={(e) => setNewMemory({ ...newMemory, date: e.target.value })}
            />
            <textarea
              placeholder="Note"
              value={newMemory.note}
              onChange={(e) => setNewMemory({ ...newMemory, note: e.target.value })}
            />
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {newMemory.image && <img src={newMemory.image} alt="preview" className="preview-image" />}
            <div className="modal-buttons">
              <button onClick={addMemory}>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Memories;
