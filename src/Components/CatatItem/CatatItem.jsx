import React from 'react';import CatatItemBody from './CatatItemBody';
import DeleteButton from '../DeleteButton/DeleteButton';
import ArchiveButton from '../ArchiveButton/ArchiveButton';

export default function CatatItem({
  title,
  content,
  id,
  timestamp,
  onArchive,
  onDelete,
}) {
  return (
    <div className="note-item">
      <CatatItemBody title={title} content={content} timestamp={timestamp} />
      {/* <ArchiveButton id={id} onArchive={onArchive}/> */}
      <div className="note-item__action">
        <ArchiveButton id={id} onArchive={onArchive} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}
