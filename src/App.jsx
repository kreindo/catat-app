import React from 'react';import CatatInput from './Components/CatatInput';
import Header from './Components/Header';
import { getInitialData } from './utils/index';

class CatatApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catatans: getInitialData(),
    };

    this.onAddCatatanHandler = this.onAddCatatanHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }
  onDeleteHandler(id) {
    const catatans = this.state.catatans.filter((catatan) => catatan.id !== id);
    this.setState({ catatans });
  }
  onArchiveHandler(id) {}

  onAddCatatanHandler({ title, content }) {
    this.setState((prevState) => {
      return {
        catatan: [
          ...prevState.catatans,
          {
            id: +new Date(),
            title,
            content,
            timestamp: new Date(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Catat App</h1>
        <Header />
        <CatatInput />
        {/* <CatatList/> */}
      </div>
    );
  }
}

export default CatatApp;
