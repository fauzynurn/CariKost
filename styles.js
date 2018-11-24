import { Dimensions } from "react-native";

export const window = Dimensions.get("window");

// this._heightDef = this.state.height * 0.3;
//     this._height = new Animated.Value(this.state.height * 0.3);
//     this._height_small = this.state.height * 0.2;

//     this._imageHeightDef = this.state.height * 0.25;
//     this._imageHeight = new Animated.Value(this._imageHeightDef);
//     this._imageHeight_small = this.state.height * 0.06;

//     this._imageWidthDef = this.state.width * 0.7;
//     this._imageWidth = new Animated.Value(this._imageWidthDef);
//     this._imageWidth_small = this.state.height * 0.4;

//     this._marginTopFormDef = this.state.height * 0.29;
//     this._marginTopForm = new Animated.Value(this._marginTopFormDef);
//     this._marginTopForm_small = this.state.height * 0.15;

//     this._containerDef = this.state.height * 0.4;
//     this._container = new Animated.Value(this._containerDef);
//     this._container_small = this.state.height * 0.35;

//     this._loginBtnDef = this.state.height * 0.6;
//     this._loginBtn = new Animated.Value(this._loginBtnDef);
//     this._loginBtn_small = this.state.height * 0.44;

export const LOGO_CONTAINER_DEF = window.height * 0.3;
export const LOGO_CONTAINER_COLLAPSE = window.height * 0.2;

export const LOGO_HEIGHT_DEF = window.height * 0.25;
export const LOGO_HEIGHT_COLLAPSE = window.height * 0.06;

export const LOGO_WIDTH_DEF = window.width * 0.7;
export const LOGO_WIDTH_COLLAPSE = window.height * 0.4;

export const MARGIN_TOP_FORM_DEF = window.height * 0.29;
export const MARGIN_TOP_FORM_COLLAPSE = window.height * 0.15;

export const CONTAINER_DEF = window.height * 0.4;
export const CONTAINER_COLLAPSE = window.height * 0.35;

export const LOGIN_BTN_DEF = window.height * 0.6;
export const LOGIN_BTN_COLLAPSE = window.height * 0.44;
