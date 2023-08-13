// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherAPIKey: '30431f444539c2aad50673a1a9714f6c',
  // Dont Use
  // googlePlatformAPI: 'AIzaSyB8qLkCxlFVic2JVW2y0FDXtbCxPF99Qmc',
  mapbox: {
    accessToken: 'pk.eyJ1IjoiYWJpbmFzc2FyIiwiYSI6ImNsajFhdzh1MDEzZTczdnIxMXkwbWJ1MXcifQ.oBeaIBTr8dY1sfzOxJBPjA'
  },
  firebaseConfig: {
    apiKey: "AIzaSyCI1ZME119vdIvNhQU8vDv6ILDveMH26sc",
    authDomain: "sistema-vrfo.firebaseapp.com",
    databaseURL: "https://sistema-vrfo-default-rtdb.firebaseio.com",
    projectId: "sistema-vrfo",
    storageBucket: "sistema-vrfo.appspot.com",
    messagingSenderId: "290409294358",
    appId: "1:290409294358:web:130b6d274dd8724a8e2337"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
