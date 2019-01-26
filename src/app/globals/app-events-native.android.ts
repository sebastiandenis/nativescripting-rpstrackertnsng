import * as app from "application";

export const setNativeEvents = () => {
  app.android.on(
    app.AndroidApplication.activityCreatedEvent,
    (args: app.AndroidActivityBundleEventData) => {
      console.logAndroid(args.eventName);
    }
  );

  app.android.on(
    app.AndroidApplication.activityBackPressedEvent,
    (args: app.AndroidActivityBundleEventData) => {
      console.logAndroid(args.eventName);
    }
  );

  app.android.on(
    app.AndroidApplication.activityPausedEvent,
    (args: app.AndroidActivityBundleEventData) => {
      console.logAndroid(args.eventName);
    }
  );

  app.android.on(
    app.AndroidApplication.activityDestroyedEvent,
    (args: app.AndroidActivityBundleEventData) => {
      console.logAndroid(args.eventName);
    }
  );

  app.android.on(
    app.AndroidApplication.activityRequestPermissionsEvent,
    (args: app.AndroidActivityBundleEventData) => {
      console.logAndroid(args.eventName);
    }
  );

  app.android.on(
    app.AndroidApplication.activityResultEvent,
    (args: app.AndroidActivityBundleEventData) => {
      console.logAndroid(args.eventName);
    }
  );

  app.android.on(
    app.AndroidApplication.activityResumedEvent,
    (args: app.AndroidActivityBundleEventData) => {
      console.logAndroid(args.eventName);
    }
  );

  app.android.on(
    app.AndroidApplication.activityStartedEvent,
    (args: app.AndroidActivityBundleEventData) => {
      console.logAndroid(args.eventName);
    }
  );

  app.android.on(
    app.AndroidApplication.activityStoppedEvent,
    (args: app.AndroidActivityBundleEventData) => {
      console.logAndroid(args.eventName);
    }
  );
};
