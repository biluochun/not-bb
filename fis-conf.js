/* global fis */

const devFiles = '*.es';
fis.set('project.files', [devFiles, '**.html']);
fis.set('project.ignore', ['/node_modules/**']);

fis.match(devFiles, {
    deploy: fis.plugin('local-deliver', {
        to: './',
    }),
});
fis.match(devFiles, {
    useHash: false,
    // optimizer: PRODUCE && fis.plugin('uglify-js'),
    parser: fis.plugin('typescript', {
        target: 2, // 0: es3 // 1: es5 // 2: es6
        // module: 2, // 1: commonjs // 2: amd // 3: umd // 4: system
        // sourceMap: DEBUG,
        noEmitHelpers: true,
        importHelpers: true,
    }),
    rExt: '.js',
});
