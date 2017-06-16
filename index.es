/**
 * not-bb
 *
 * @export
 * @class NotBB
 */
const app = require('./lib');

module.exports = class NotBB {
    constructor (conf) {
        this.NotBB = true; // 哈哈哈
        if (typeof conf === 'object') {
            console.log('constructor', conf);
            this.conf = JSON.parse(JSON.stringify(conf));
        }
    }

    set (conf) {
        if (typeof conf !== 'object') throw new Error(`set 参数错误 ${conf}`);
        Object.assign(this.conf, JSON.parse(JSON.stringify(conf)));
    }

    check () {

    }

    start () {
        this.check();
        app.start(this.conf);
    }
};

