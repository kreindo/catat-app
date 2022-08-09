import React, { Component } from 'react';
{
}
class CatatInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: null,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onContentChangeEventHandler =
      this.onContentChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.textLogic = this.textLogic.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onContentChangeEventHandler(event) {
    if (this.state.content === 'minecraft') {
      this.setState(() => {
        return { content: this.state.content };
      });
    } else {
      this.setState(() => {
        return {
          content: event.target.value,
        };
      });
    }
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addCatatan(this.state);
  }

  textLogic(event) {}

  //     if (this.state.content === `minecraft`) {
  //     return this.setState(() => {

  //         this.state.content = this.state.content.length();
  //       } else {
  //         return this.state.content;
  //       }
  //     }
  //     }
  //     });
  //   });
  // }
  render() {
    return (
      <div>
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
          <p>{this.state.content}</p>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CatatInput;
