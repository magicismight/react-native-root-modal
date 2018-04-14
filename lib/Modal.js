import { View, Animated } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RootSiblings from 'react-native-root-siblings';

import ModalContainer, { AnimatedModalContainer } from './ModalContainer';

class Modal extends Component {
    static displayName = 'Modal';
    static contextTypes = {
        store: PropTypes.object
    };
    static propTypes = {
        visible: PropTypes.bool,
        ...Animated.View.propTypes
    };
    static defaultProps = {
        visible: false
    };

    componentWillMount() {
        this._modal = new RootSiblings(
          this._getContent(ModalContainer, this.props),
          null,
          this.context.store
        );
    };

    componentWillReceiveProps(nextProps, nextContext) {
        this._modal.update(
          this._getContent(ModalContainer, nextProps),
          null,
          nextContext.store
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
    componentWillMount() {
        this._modal = new RootSiblings(
            this._getContent(AnimatedModalContainer, this.props),
            null,
            this.context.store
        );
    };

    componentWillReceiveProps(nextProps, nextContext)  {
        this._modal.update(
            this._getContent(AnimatedModalContainer, nextProps),
            null,
            nextContext.store
        );
    };
}

if (!Animated.Modal) {
    Animated.Modal = AnimatedModal;
}

export {
  RootSiblings as Manager,
  AnimatedModal as Animated
}
export default Modal;
