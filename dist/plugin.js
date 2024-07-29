var AppsFlyerCapacitorPlugin = (function (exports, core) {
    'use strict';

    exports.AFConstants = void 0;
    (function (AFConstants) {
        AFConstants["onConversionDataSuccess"] = "onConversionDataSuccess";
        AFConstants["onConversionDataFail"] = "onConversionDataFail";
        AFConstants["onAppOpenAttribution"] = "onAppOpenAttribution";
        AFConstants["onAttributionFailure"] = "onAttributionFailure";
        AFConstants["CONVERSION_CALLBACK"] = "conversion_callback";
        AFConstants["OAOA_CALLBACK"] = "oaoa_callback";
        AFConstants["UDL_CALLBACK"] = "udl_callback";
    })(exports.AFConstants || (exports.AFConstants = {}));

    class AppsFlyerConsentClass {
        constructor(isUserSubjectToGDPR, hasConsentForDataUsage, hasConsentForAdsPersonalization) {
            this.isUserSubjectToGDPR = isUserSubjectToGDPR;
            this.hasConsentForDataUsage = hasConsentForDataUsage;
            this.hasConsentForAdsPersonalization = hasConsentForAdsPersonalization;
        }
        static forGDPRUser(hasConsentForDataUsage, hasConsentForAdsPersonalization) {
            return new AppsFlyerConsentClass(true, hasConsentForDataUsage, hasConsentForAdsPersonalization);
        }
        static forNonGDPRUser() {
            return new AppsFlyerConsentClass(false);
        }
    }
    const AppsFlyerConsent = {
        forGDPRUser: AppsFlyerConsentClass.forGDPRUser,
        forNonGDPRUser: AppsFlyerConsentClass.forNonGDPRUser
    };

    const AppsFlyer = core.registerPlugin('AppsFlyerPlugin', {});

    exports.AppsFlyer = AppsFlyer;
    exports.AppsFlyerConsent = AppsFlyerConsent;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
