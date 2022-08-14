import React from 'react';

export default function ContactItemBody(props) {
  const { title, content } = props;
  return (
    <div className="note-item__body">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__content">{content}</p>
    </div>
  );
}
