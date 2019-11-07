import RootSiblings from "react-native-root-siblings";
import { ViewProps } from "react-native";
import React from "react";

interface ModalProps extends ViewProps {
    visible: boolean;
}

export default class Modal extends React.Component<ModalProps> {}

export const AnimatedModal: any;

export { RootSiblings as ModalManager };
