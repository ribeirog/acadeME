'use strict';

var when     = require('when');
var request  = require('superagent');

var APIUtils = require('./APIUtils');

var CourseAPI = {

  get: function(id) {
    var deferred = when.defer();

    // request.get(APIUtils.API_ROOT + 'course/' + id).end(function(res) {
    //   if ( !res.ok ) {
    //     deferred.reject(JSON.parse(res.text));
    //   } else {
    //     deferred.resolve(APIUtils.normalizeResponse(res));
    //   }
    // });

    deferred.resolve({
      id: id,
      title: 'Human-Computer Interaction',
      instructor: {
        name: 'Joe Black'
      },
      percentageComplete: 35,
      lessons: [
        {
          id: 0,
          title: 'Rapid Prototyping',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ante finibus, dictum nisi et, dictum mi. Nam lobortis consequat purus sit amet mattis. Nam at tincidunt risus. Vivamus nec sem vitae sem suscipit tempus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          image_url: ''
        },
        {
          id: 1,
          title: 'Heuristic Evaluation',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel ante finibus, dictum nisi et, dictum mi. Nam lobortis consequat purus sit amet mattis. Nam at tincidunt risus.',
          image_url: ''
        }
      ]
    });

    return deferred.promise;
  },

  createLesson: function(courseId, lesson) {
    var deferred = when.defer();

    request.put(APIUtils.API_ROOT + 'course/' + courseId + '/lesson', lesson).end(function(res) {
      if ( !res.ok ) {
        deferred.reject(JSON.parse(res.text));
      } else {
        deferred.resolve(APIUtils.normalizeResponse(res));
      }
    });

    return deferred.promise;
  },

  search: function(id, query) {
    var deferred = when.defer();

    request.get(APIUtils.API_ROOT + 'course/' + id + '/search/' + query).end(function(res) {
      if ( !res.ok ) {
        deferred.reject(JSON.parse(res.text));
      } else {
        deferred.resolve(APIUtils.normalizeResponse(res));
      }
    });

    return deferred.promise;
  },

  delete: function(id) {
    var deferred = when.defer();

    request.delete(APIUtils.API_ROOT + 'course/' + id).end(function(res) {
      if ( !res.ok ) {
        deferred.reject(JSON.parse(res.text));
      } else {
        deferred.resolve(APIUtils.normalizeResponse(res));
      }
    });

    return deferred.promise;
  }

};

module.exports = CourseAPI;