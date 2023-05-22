const userAgent = navigator.userAgent;
const isInstagramInAppBrowser = (userAgent: string) => {
  return /Instagram/i.test(userAgent);
};

export const isInstagram = isInstagramInAppBrowser(userAgent);
