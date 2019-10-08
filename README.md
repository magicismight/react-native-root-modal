# react-native-root-modal [![npm version](https://badge.fury.io/js/react-native-root-modal.svg)](http://badge.fury.io/js/react-native-root-modal)

------------------------

## Features
1. Pure javascript solution, easy to install.
2. Support both `React element` way and `javascript class` way to invoke, easy to use.
3. Inherited from `<View />` you can set your own style or animation or anything you can do with View.
4. ~~redux support~~.

## Breaking changes

### 5.x
From 5.x redux support is not enabled by default.
The redux support can be enabled by setting a redux context wrapper.

```
import { setSiblingWrapper } from 'react-native-root-siblings';
import { Provider } from 'react-redux';

// const store = ... get store;

// Call this before using redux context inside RootSiblings.
setSiblingWrapper((sibling) => <Provider store={store}>{sibling}</Provider>);
```


## Install

`npm install react-native-root-modal`

## Usage

Import library any where inside your code before `AppRegistry.registerComponent` is called.

```
import Modal, { AnimatedModal, ModalManager } from 'react-native-root-modal';
```

Invoked by `React element` way.

```
....other elements before
<Modal
    style={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        transform: [{scale: this.state.scaleAnimation}]
    }}

    visible={this.state.modalVisible}
>
    ... You can add anything inside
</Modal>
....other elements after

```

Just put `<Modal />` element anywhere, And it will be front of other elements.
And you can set `<Modal />` element\`s style or other properties inherited from `<View />` element


Or you can invoke it by `JavaScript class` way

Import modal Manager class.
```
import { ModalManager } from 'react-native-root-modal';

```

Invoke it.
```
// Create a Modal element on screen.
let modal = new ModalManager(<View style={modal container style}>
    ...modal contents here.
</View>);

// Update (replace) the modal element which is already existed.
modal.update(<View style={modal container style}>
    ...other modal contents here.
</View>);

// Destroy it
modal.destroy();
```

## Example

### IOS
----
![Example](./Example/screenShoot.ios.gif)

### Android
----
![Example](./Example/screenShoot.android.gif)
## Notice

Modal element created by this library can\`t cover other `native` Modal elements,like: [Official Modal Element](http://facebook.github.io/react-native/docs/modal.html#content)
