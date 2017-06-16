"use strict";
const NotBB = require('../index');
const bb = new NotBB({
    name: 'test-name',
    port: 6666,
});
bb.set({
    qq: 563861545,
    db: {
        type: 'mysql',
        name: 'db',
        pwd: '666',
    },
});
bb.start();
