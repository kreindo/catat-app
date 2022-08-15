import React from 'react';
import ArchiveList from './Components/ArchiveList/ArchiveList';
import CatatInput from './Components/CatatInput';
import CatatList from './Components/CatatList/CatatList';

import Header from './Components/Header';
import { getInitialData, showFormattedDate } from './utils/index';

class CatatApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catatans: getInitialData(),
      // archivedCatatans: {},
    };

    this.onAddCatatanHandler = this.onAddCatatanHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    // this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }
  onDeleteHandler(id) {
    const catatans = this.state.catatans.filter((catatan) => catatan.id !== id);
    this.setState({ catatans });
  }

  // onArchiveHandler(id) {
  //   const archivedCatatans = this.state.catatans.filter(
  //     (catatan) => catatan.id !== id
  //   );
  //   this.setState(() => {

  //   });
  // }

  // onUnarchiveHandler(id) {
  //   const catatans = this.state.archivedCatatans.filter(
  //     (catatan) => catatan.id !== id
  //   );
  //   this.setState({ catatans });
  // }

  onAddCatatanHandler({ title, content }) {
    this.setState((prevState) => {
      return {
        catatans: [
          ...prevState.catatans,
          {
            id: +new Date(),
            title,
            content,
            // timestamp: new Date(),
            // isArchived: false,
            timestamp: showFormattedDate(new Date()),
          },
        ],
      };
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="note-app__body">
          <CatatInput addCatatan={this.onAddCatatanHandler} />
          <CatatList
            catatans={this.state.catatans}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          {/* <ArchiveList
            archivedCatatans={this.state.archivedCatatans}
            onDelete={this.onDeleteHandler}
            onUnarchive={this.onUnarchiveHandler}
          /> */}
        </div>
      </div>
    );
  }
}

export default CatatApp;
