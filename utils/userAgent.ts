export const isInstagramInAppBrowser = (userAgent: string) => {
  return /Instagram/i.test(userAgent);
};
