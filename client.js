;(
    function (win) {
        let cof={};
        let nv = win.navigator;
        cof.appVersion = nv.appVersion;
        cof.language = nv.language;
        cof.platform = nv.platform;
        cof.userAgent = nv.userAgent;
        cof.appCodeName = nv.appCodeName;
        cof.appName = nv.appName;
        cof.vendor = nv.vendor;
        cof.vendorSub = nv.vendorSub;
        cof.product = nv.product;
        cof.productSub = nv.productSub;
        cof.height=window.screen.height;
        cof.width=window.screen.width;
        win.getClient=function () {
          return cof;
        };
    }
)(window)