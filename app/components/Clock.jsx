var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function() {
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatTime: function(totalSeconds) {
    var minite = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    if(minite < 10) {
      minite = '0' + minite;
    }

    if(seconds < 10) {
      seconds = '0' + seconds;
    }

    return minite + ':' + seconds;
  },
  render: function() {
    var {totalSeconds} = this.props;
    return(
      <div className="clock">
        <span className="clock-text">
          {this.formatTime(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
