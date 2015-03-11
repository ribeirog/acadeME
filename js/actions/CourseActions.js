'use strict';

var Reflux = require('reflux');

var CourseActions = Reflux.createActions([

  'loadAll',
  'openCourse',
  'openLessons',
  'openChat',
  'createLesson',
  'enroll',
  'unEnroll'

]);

module.exports = CourseActions;