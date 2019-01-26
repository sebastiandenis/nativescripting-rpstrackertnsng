// nativescript related events
import * as app from "application";

export const setAppEvents = () => {
  app.on(app.launchEvent, (args: app.ApplicationEventData) => {
    console.log(args.eventName);
  });
};
