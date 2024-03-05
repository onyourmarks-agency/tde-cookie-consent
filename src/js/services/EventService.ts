import type { CookieAcceptedType, CookieInfoType } from '../_types/cookie';
import { getCurrentConfig } from './ConfigService';
import { setCookie } from './CookieService';

export const dispatchChanged = (): void => {
  document.dispatchEvent(new Event('oymcc-changed'));
};

export const dispatchCloseOverlay = (): void => {
  document.dispatchEvent(new Event('oymcc-close-overlay'));
};

export const storeCookie = (accepted: CookieAcceptedType, info: CookieInfoType): void => {
  if (!accepted || !info) {
    return;
  }

  setCookie(
    getCurrentConfig().cookieName,
    JSON.stringify({
      accepted,
      info,
    }),
    365,
  );

  globalThis.oymcc.cookies = {
    accepted,
    info,
  };
};
