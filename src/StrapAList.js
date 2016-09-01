import React from 'react';
import ReactDOM from 'react-dom';

class StrapAList extends React.Component {

    static propTypes = {
        autoPlay: React.PropTypes.bool,
        maxLoops: React.PropTypes.number
    }
    state = {
        loopsRemaining: this.props.maxLoops,
    }

    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

  render() {
    const postPreviews = this.renderPostPreviews();

    return (
      <section>
        <div><h3>Component straps</h3></div>
        <div>
          { postPreviews }
        </div>
      </section>
    );
  }

  renderPostPreviews() {
    return this.props.straps.map(post => this.renderPostPreview(post));
  }

  renderPostPreview(post) {
    return (
      <article key={post.id}>
         <div>{post.title}, {post.text}
        </div>
      </article>
    );
  }
}


module.exports = StrapAList;