require('./Navigation.scss');
import React from 'react';

class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: '#0f999c',
      bWeb: '',
      bAll: '',
      bMobile: ''
    };

    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton(type) {
    if (typeof type !== 'string') return;
    switch (type) {
      case 'web':
        this.setState(prevState => ({
          bWeb: prevState.backgroundColor,
          bAll: '',
          bMobile: ''
        }));
        break;
      case 'all':
        this.setState(prevState => ({
          bAll: prevState.backgroundColor,
          bWeb: '',
          bMobile: ''
        }));
        break;
      case 'mobile':
        this.setState(prevState => ({
          bMobile: prevState.backgroundColor,
          bAll: '',
          bWeb: ''
        }));
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="Navigation">
        <div
          className="NavigationItem"
          onClick={() => this.toggleButton('web')}
        >
          <div
            className="InnerItem"
            style={{ backgroundColor: this.state.bWeb }}
          >
            WEB
          </div>
        </div>
        <div
          className="NavigationItem"
          onClick={() => this.toggleButton('all')}
        >
          <div
            className="InnerItem"
            style={{ backgroundColor: this.state.bAll }}
          >
            ALL
          </div>
        </div>
        <div
          className="NavigationItem"
          onClick={() => this.toggleButton('mobile')}
        >
          <div
            className="InnerItem"
            style={{ backgroundColor: this.state.bMobile }}
          >
            MOBILE
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
