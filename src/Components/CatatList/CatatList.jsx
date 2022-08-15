import React from 'react';import { showFormattedDate } from '../../utils';
import CatatItem from '../CatatItem/CatatItem';

const ContactList = (props) => {
  const { catatans, onDelete } = props;
  return (
    <div className="notes-list">
      {catatans.map((catatan) => (
        <CatatItem
          key={catatan.id}
          id={catatan.id}
          onDelete={onDelete}
          // onArchive={onArchive}
          timestamp={showFormattedDate(catatan.createdAt)}
          {...catatan}
        />
      ))}
    </div>
  );
};

export default ContactList;
