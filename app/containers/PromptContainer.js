var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      playerName: ""
    }
  },
  handleUpdateUser: function(event) {
    this.setState({playerName: event.target.value})
  },
  handleSubmitUser: function(event) {
    event.preventDefault();
    var playerName = this.state.playerName;
    this.setState({playerName: ""});

    if ( this.props.routeParams.playerOne ) {
      this.context.router.push({
        pathname: "/battle",
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.playerName
        }
      });
    } else {
      this.context.router.push("/playerTwo/" + this.state.playerName)
    }
  },
  render: function() {
    return (
      <div>
        <Prompt
          header={this.props.route.header}
          playerName={this.state.playerName}
          onUpdateUser={this.handleUpdateUser}
          onSubmitUser={this.handleSubmitUser} />
      </div>
    )
  }
});

module.exports = PromptContainer;