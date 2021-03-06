'use strict';

var React         = require('react/addons');
var _             = require('lodash');

var LessonSnippet = require('../../components/LessonSnippet.jsx');

var CourseLessonList = React.createClass({

  propTypes: {
    currentUser: React.PropTypes.object.isRequired,
    course: React.PropTypes.object.isRequired
  },

  getDefaultProps: function() {
    return {
      currentUser: {},
      course: {}
    };
  },

  renderLessons: function() {
    var elements = null;

    if ( _.isEmpty(this.props.course) || _.isEmpty(this.props.course.lessons) ) {
      elements = (
        <h2 className="text-center nudge--top">The instructor has not added any lessons to this course yet!</h2>
      );
    } else if ( !_.isEmpty(this.props.course) && this.props.course.lessons ) {
      elements = _.map(this.props.course.lessons, function(lesson, index) {
        return (
          <LessonSnippet currentUser={this.props.currentUser}
                         course={this.props.course}
                         lesson={lesson}
                         key={index} />
        );
      }.bind(this));
    }

    return elements;
  },

  render: function() {
    return (
      <div>
        {this.renderLessons()}
      </div>
    );
  }

});

module.exports = CourseLessonList;