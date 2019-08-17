import RootSiblings from "react-native-root-siblings";
import { ViewProps } from "react-native";

interface ModalProps extends ViewProps {
    visible: boolean;
}

export class Modal<ModalProps> {}

export const AnimatedModal: any;

export { RootSiblings as ModalManager };
