# gulp-cloudformation
Simple gulp plugin for deploying stack files to AWS cloudformation

This module will WAIT until the deployment is entirely finished before completing
the task. Useful if you want to ensure the deployment is complete before running 
other gulp tasks.

NOTE: This documentation is still being written. If you click on a link and it
doesn't go anywhere, it's likely because that portion of the docs hasn't been
written yet. If there are parts of the docs you'd like us to focus on, feel
free to ask!

## Build Status

[![npm version](https://badge.fury.io/js/gulp-cloudformation.svg)](https://badge.fury.io/js/gulp-cloudformation)<br />
[![Code Climate](https://codeclimate.com/github/brianneisler/gulp-cloudformation/badges/gpa.svg)](https://codeclimate.com/github/brianneisler/gulp-cloudformation)<br />
[![Build Status](https://travis-ci.org/brianneisler/gulp-cloudformation.svg)](https://travis-ci.org/brianneisler/gulp-cloudformation)<br />
[![NPM](https://nodei.co/npm/gulp-cloudformation.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-cloudformation/)


## Quick Examples

gulpfile.js
```javascript
var gulp            = require('gulp');
var recipe          = require('gulp-cloudformation');

gulp.task('stack', function() {
    return gulp.src(['location/to/[name-of-stack-file].json'])
        .pipe(cloudformation.init({   //Only validates the stack files
            region: 'us-east-1',
            accessKeyId: 'YOUR AWS ACCESS KEY ID',
            secretAccessKey: 'YOUR AWS SECRET ACCESS KEY'
        })
        .pipe(cloudformation.deploy({ //deploy stack files
            Capabilities: [ 'CAPABILITY_IAM' ] //needed if deploying IAM Roles
        }))
        .on('error', function(error) {
            util.log('Stream Exiting With Error', error);
            throw error;
        });
});
```


## Dependencies

gulp-cloudformation is dependent upon

- [aws-sdk](https://github.com/aws/aws-sdk-js) (2.2.35)
- [bugcore](https://github.com/airbug/bugcore) (0.3.26)
- [gulp-util](https://github.com/gulpjs/gulp-util) (3.0.7)
- [rx-lite](https://github.com/Reactive-Extensions/RxJS) (4.0.7)
- [through2](https://github.com/rvagg/through2) (2.0.1)


## Download Source

The source is available for download from [GitHub](https://github.com/brianneisler/gulp-cloudformation)


## Install

For node js, you can install using Node Package Manager [npm](https://www.npmjs.org/package/gulp-cloudformation)

    npm install gulp-cloudformation


## Usage

In node js:


```javascript
var cloudformation = require('gulp-cloudformation');
```
