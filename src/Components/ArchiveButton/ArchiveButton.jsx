import React from 'react';
export default function ArchiveButton({ id, onArchive }) {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => alert('not functional :(')}
    >
      Archive
    </button>
  );
}
