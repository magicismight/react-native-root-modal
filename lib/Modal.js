import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RootSiblings from 'react-native-root-siblings';

import ModalContainer, { AnimatedModalContainer } from './ModalContainer';

class Modal extends Component {
    static displayName = 'Modal';
    static contextTypes = {
        store: PropTypes.object
    };
    static defaultProps = {
        visible: false
    };

    componentDidMount() {
        this._modal = new RootSiblings(
          this._getContent(ModalContainer, this.props),
          null,
          this.context.store
        );
    };

    componentDidUpdate() {
        this._modal.update(
          this._getContent(ModalContainer, this.props),
          null,
          this.context.store
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

class AnimatedModal extends Modal {
    componentDidMount() {
        this._modal = new RootSiblings(
            this._getContent(AnimatedModalContainer, this.props),
            null,
            this.context.store
        );
    };

    componentDidUpdate()  {
        this._modal.update(
            this._getContent(AnimatedModalContainer, this.props),
            null,
            this.context.store
        );
    };
}

export {
  RootSiblings as ModalManager,
  AnimatedModal
}
export default Modal;
