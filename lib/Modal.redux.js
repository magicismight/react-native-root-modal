import React, { Component } from 'react';
import { ReactReduxContext } from 'react-redux';
import RootSiblings from 'react-native-root-siblings/src/Siblings.redux';

import ModalContainer, { AnimatedModalContainer } from './ModalContainer';

class Modal extends Component {
    static displayName = 'Modal';
    static defaultProps = {
        visible: false
    };

    componentDidMount() {
        this._modal = new RootSiblings(
          this._getContent(ModalContainer, this.props),
          null,
          this.props.store
        );
    };

    componentDidUpdate() {
        this._modal.update(
          this._getContent(ModalContainer, this.props),
          null,
          this.props.store
        );
    };

    componentWillUnmount() {
        this._modal.destroy();
    };

    _getContent(Container, props) {
        return (
          <Container
            {...props}
          />
        );
    }

    render() {
        return null;
    }
}

function connectStore(Comp) {
  return function(props) {
    return (
      <ReactReduxContext.Consumer>
        {({ store }) => {
          return <Comp {...props} store={store} />;
        }}
      </ReactReduxContext.Consumer>
    );
  }
}

const AnimatedModal = connectStore(class extends Modal {
    componentDidMount() {
        this._modal = new RootSiblings(
            this._getContent(AnimatedModalContainer, this.props),
            null,
            this.props.store
        );
    };

    componentDidUpdate()  {
        this._modal.update(
            this._getContent(AnimatedModalContainer, this.props),
            null,
            this.props.store
        );
    };
})


export {
  RootSiblings as ModalManager,
  AnimatedModal
}

export default connectStore(Modal);
