import React, { Component } from 'react';{
}
class CatatInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onContentChangeEventHandler =
      this.onContentChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onContentChangeEventHandler(event) {
    this.setState(() => {
      return {
        content: event.target.value,
      };
    });
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addCatatan(this.state)
  }
  render() {
    return (
      <div style={{ backgroundColor: 'red' }}>
        <h1>Catat App</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <input type="text" onChange={this.onTitleChangeEventHandler} />
          <input type="text" onChange={this.onContentChangeEventHandler} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CatatInput;
