import React from 'react';
export default function ContactItemBody(props) {
  const { title, content, timestamp } = props;
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{timestamp}</p>
      <p className="note-item__body">{content}</p>
    </div>
  );
}
