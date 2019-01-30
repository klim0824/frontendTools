'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';

const path = {
    root : `./`,
    all : `./*`,
    assets : {
        all : `./*`,
        documents : `./assets/documents`,
        fonts : `./assets/fonts`,
        images : `./assets/images`,
        scripts : `./assets/scripts`,
        styles : {
            css : `./assets/styles/css`,
            scss : `./assets/styles/scss`
        }
    }
};

const server = browserSync.create();
const reload = (done) => {
    server.reload();
    done();
};
const serve = (done) => {
    server.init({
        server: {
            baseDir: path.root
        }
    });
    done();
};

const watch = () => gulp.watch([path.all,],reload);

export default gulp.series(serve, watch);