import * as utils from "utils/utils";

declare var UIApplication: any;

export const setStatusBarColors = () => {
  utils.ios.getter(
    UIApplication,
    UIApplication.sharedApplication
  ).statusBarStyle = UIStatusBarStyle.LightContent;
};
