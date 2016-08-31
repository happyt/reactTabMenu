var converter = new Showdown.converter();

var Conversation = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="conversation panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            {this.props.id}
            {this.props.last_message_snippet}
            {this.props.other_user_id}
          </h3>
        </div>
        <div className="panel-body">
          <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
        </div>
      </div>
    );
  }
});

var ConversationList = React.createClass({
 // Make sure this.props.data is an array
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  render: function() {

    window.foo            = this.props.data;
    var conversationNodes = this.props.data.map(function(conversation, index) {

      return (
        <Conversation id={conversation.id} key={index}>
          last_message_snippet={conversation.last_message_snippet}
          other_user_id={conversation.other_user_id}
        </Conversation>
      );
    });

    return (
      <div className="conversationList">
        {conversationNodes}
      </div>
    );
  }
});

var ConversationBox = React.createClass({
  loadConversationsFromServer: function() {
    return $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data.conversations});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },

 /* Taken from 
    https://facebook.github.io/react/docs/reusable-components.html#mixins
    clears all intervals after component is unmounted
  */
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  },

  componentDidMount: function() {
    this.loadConversationsFromServer();
    this.setInterval(this.loadConversationsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="conversationBox">
        <h1>Conversations</h1>
        <ConversationList data={this.state.data} />
      </div>
    );
  }
});

$(document).on("page:change", function() {
  var $content = $("#content");
  if ($content.length > 0) {
    React.render(
      <ConversationBox url="/conversations.json" pollInterval={20000} />,
      document.getElementById('content')
    );
  }
})