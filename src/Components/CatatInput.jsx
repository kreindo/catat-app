import React, { Component } from 'react';
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
    console.log('clicked');
    this.props.addCatatan(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler} className="note-input">
        <input
          type="text"
          onChange={this.onTitleChangeEventHandler}
          placeholder="enter title here..."
          required
        />
        <textarea
          type="text"
          onChange={this.onContentChangeEventHandler}
          placeholder="enter note here..."
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CatatInput;
