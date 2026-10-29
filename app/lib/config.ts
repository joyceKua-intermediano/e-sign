// Runtime configuration, read from environment variables on the server.
// Values are resolved per request, so the same Docker image works in any environment.
export function getAppConfig() {
  return {
    appUrl: (process.env.APP_URL || "http://localhost:3000").replace(/\/+$/, ""),
    appName: process.env.APP_NAME || "DocuSign",
  };
}
