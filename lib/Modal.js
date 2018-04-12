import { View, Animated } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RootSiblings from 'react-native-root-siblings';
import { Provider } from 'react-redux';

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
        this._modal = new RootSiblings(this._getContent(ModalContainer, this.props));
    };

    componentWillReceiveProps(nextProps) {
        this._modal.update(this._getContent(ModalContainer, nextProps));
    };

    componentWillUnmount() {
        this._modal.destroy();
    };

    _getContent(Container, props) {
        const store = this.props.store || this.context.store;
        if (store) {
            return (
              <Provider store={store}>
                  <Container
                    {...props}
                  />
              </Provider>
            );
        } else {
            return (
              <Container
                {...props}
              />
            );
        }
    }

    render() {
        return null;
    }
}

class AnimatedModal extends Modal {
    componentWillMount() {
        this._modal = new RootSiblings(this._getContent(AnimatedModalContainer, this.props));
    };

    componentWillReceiveProps(nextProps)  {
        this._modal.update(this._getContent(AnimatedModalContainer, nextProps));
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
