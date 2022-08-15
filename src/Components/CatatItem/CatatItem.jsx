import React from 'react';
import CatatItemBody from './CatatItemBody';
import DeleteButton from '../DeleteButton/DeleteButton';

export default function CatatItem({ title, content, id, timestamp, onDelete }) {
  return (
    <div className="note-item">
      <CatatItemBody title={title} content={content} timestamp={timestamp} />
      {/* <ArchiveButton id={id} onArchive={onArchive}/> */}
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}
