// AdStira Ads Manager - COMPLETE VERSION
class AdStiraRevenueManager {
    constructor() {
        this.adClientId = "62dae259741887f42ba133aea9ce8028";
        this.adsEnabled = true;
        this.adCounter = 0;
        this.dailyRevenue = 0;
    }

    initAdStira() {
        if (!this.adsEnabled) return;
        console.log('✅ AdStira Initialized');
    }

    showQuadAds() {
        if (!this.adsEnabled) return;
        
        this.adCounter++;
        console.log(`🎯 Showing 4 Ads - Set #${this.adCounter}`);
        
        this.showInterstitialAd();
        
        setTimeout(() => {
            this.showBannerAd();
        }, 8000);

        setTimeout(() => {
            this.showVideoAd();
        }, 16000);

        setTimeout(() => {
            this.showPushAd();
        }, 24000);
    }

    showInterstitialAd() {
        console.log('🔄 Showing Interstitial Ad');
        // SMARTLINK AD
        window.open('https://www.effectivegatecpm.com/h8ftnbwz7j?key=23a91a54de2595d8217cf1f83ede4456', '_blank');
    }

    showBannerAd() {
        console.log('📺 Showing Banner Ad');
        // BANNER AD
        const bannerHTML = `
            <div style="position: fixed; bottom: 0; width: 100%; text-align: center; background: white; z-index: 9999; padding: 10px;">
                <script type="text/javascript">
                    atOptions = {
                        'key' : '62dae259741887f42ba133aea9ce8028',
                        'format' : 'iframe',
                        'height' : 60,
                        'width' : 468,
                        'params' : {}
                    };
                </script>
                <script type="text/javascript" src="//www.highperformanceformat.com/62dae259741887f42ba133aea9ce8028/invoke.js"></script>
            </div>
        `;
        document.body.innerHTML += bannerHTML;
    }

    showVideoAd() {
        console.log('🎥 Showing Video Ad');
        // SOCIAL BAR AD
        const videoHTML = `
            <div>
                <script type='text/javascript' src='//pl28138593.effectivegatecpm.com/c1/7a/5b/c17a5b3f2bb47df5b6ce9a99978a3b7c.js'></script>
            </div>
        `;
        document.body.innerHTML += videoHTML;
    }

    showPushAd() {
        console.log('🔔 Showing Push Ad');
        // NATIVE BANNER AD
        const nativeHTML = `
            <div style="position: fixed; top: 10px; right: 10px; z-index: 9998;">
                <script async src="//pl28140114.effectivegatecpm.com/b10b0a2549e0366bc6317a6d5862501e/invoke.js"></script>
                <div id="container-b10b0a2549e0366bc6317a6d5862501e"></div>
            </div>
        `;
        document.body.innerHTML += nativeHTML;
    }
}

// Initialize ads
const adManager = new AdStiraRevenueManager();
adManager.initAdStira();

// Auto show ads
window.addEventListener('load', function() {
    setTimeout(() => {
        adManager.showQuadAds();
    }, 3000);
});

// Repeat every 30 seconds
setInterval(() => {
    adManager.showQuadAds();
}, 30000);
