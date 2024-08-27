export default ({ config }) => ({
  ...config,
  name: "Ryde",
  slug: "ryde",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#2f80ed",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.jamespa.ryde",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.jamespa.ryde",
    config: {
      googleMaps: {
        apiKey: process.env.EXPO_PUBLIC_GOOGLE_API_KEY, // Inject your API key here
      },
    },
  },
  web: {
    bundler: "metro",
    output: "server",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    [
      "expo-router",
      {
        origin: "https://uber.com/",
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    router: {
      origin: "https://uber.com/",
    },
    eas: {
      projectId: "d5c55b47-b479-4549-af23-2cc15d147783",
    },
  },
  runtimeVersion: {
    policy: "appVersion",
  },
  updates: {
    url: "https://u.expo.dev/d5c55b47-b479-4549-af23-2cc15d147783",
  },
});
