import * as app from "application";

class MyDelegate extends UIResponder implements UIApplicationDelegate {
  public static ObjCProtocols = [UIApplicationDelegate];

  applicationWillFinishLaunchingWithOptions(
    application: UIApplication,
    launchOptions: NSDictionary<any, any>
  ): boolean {
    console.logIos("applicationWillFinishLaunchingWithOptions");
    return true;
  }

  applicationDidFinishLaunchingWithOptions(
    application: UIApplication,
    launchOptions: NSDictionary<any, any>
  ): boolean {
    console.logIos("applicationDidFinishLaunchingWithOptions");
    return true;
  }

  applicationDidBecomeActive(application: UIApplication): boolean {
    console.logIos("applicationDidBecomeActive");
    return true;
  }

  applicationDidEnterBackground(application: UIApplication): boolean {
    console.logIos("applicationDidEnterBackground");
    return true;
  }

  applicationWillResignActive(application: UIApplication): boolean {
    console.logIos("applicationWillResignActive");
    return true;
  }

  applicationEnterForeground(application: UIApplication): boolean {
    console.logIos("applicationEnterForeground");
    return true;
  }

  applicationWillTerminate(application: UIApplication): boolean {
    console.logIos("applicationWillTerminate");
    return true;
  }
}

export const setNativeEvents = () => {
  app.ios.delegate = MyDelegate;
};
