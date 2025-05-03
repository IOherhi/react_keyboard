import React from 'react';

export class App extends React.Component {
  state = {
    lastKey: null,
  };

  handleKeyDown = (event: React.KeyboardEvent): void => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { lastKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${lastKey}]`}
        </p>
      </div>
    );
  }
}
