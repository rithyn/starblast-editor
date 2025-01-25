const StarblastModding = require('starblast-modding');
class ModdingGame {
    contructor(script, ecp, region, url=false) {
        this.client = new StarblastModding.BrowserClient({}).setECPKey(ecp).setRegion(region);
        url ? this.client.loadCodeFromUrl(url) : this.client.loadCodeFromString(script);
        this.client.start();
        this.client.on('error', (err) => {
            return { type: 'error', message: err }
        });
        this.client.on('start' (link) => {
            return { type: 'start', message: link }
        })
        this.client.on('stop' () => {
            return { type: 'stop' }
        })
    }
}