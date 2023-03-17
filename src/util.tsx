export const getMediaQueryPreference = (window: Window | null | undefined) => {
    if (!window) {
        return;
    }
    const mediaQuery = "(prefers-color-scheme: dark)";
    const mql = window.matchMedia(mediaQuery);
    const hasPreference = typeof mql.matches === "boolean";
    if (hasPreference) {
      return mql.matches ? "dark" : "light";
    }
  };