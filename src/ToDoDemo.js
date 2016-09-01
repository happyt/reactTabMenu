import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';


class ToDoDemo extends React.Component {
  state = {
    items: [
      {
        content: "Item One",
        complete: true,
        order: 1
      },
      {
        content: "Item Two",
        complete: false,
        order: 2
      },
      {
        content: "Item Three",
        complete: false,
        order: 3
      },
      {
        content: "Item Four",
        complete: false,
        order: 4
      },
    ]
  };

  removeItem = (index, item) => {
    let { items } = this.state;
    items.splice(index, 1);
    this.setState({ items });
  };

  updateItem = (index, item) => {
    let { items } = this.state;
    items[index] = item;
    this.setState({ items });
  };

  render() {
    return (
      <div className="App card-panel">
        <TodoList items={this.state.items}
          onDeleteItem={this.removeItem}
          onUpdateItem={this.updateItem} />
      </div>
    );
  }
}

class TodoList extends React.Component {

  mapToListItems = (items, props) => {
    let data = { todo: [], done: [] };

    items.map((item, index) => {
      let listItem = <TodoListItem item={item} {...props} id={index} key={item.order} />;
      data[item.complete === true ? 'done' : 'todo'].push(listItem);
      return item;
    });

    return data;
  };

  render() {
    let { items, ...props } = this.props;
    let listItems = this.mapToListItems(items, props);

    return (
      <div className="TodoList">
        Incomplete:
        <ul className="TodoList-active collection">
          {listItems.todo}
        </ul>
        Complete:
        <ul className="TodoList-done collection">
          {listItems.done}
        </ul>
      </div>
    );
  }

  static propTypes = {
    items: React.PropTypes.array.isRequired,
    onDeleteItem: React.PropTypes.func.isRequired,
    onUpdateItem: React.PropTypes.func.isRequired
  };

  static displayName = "TodoList";
}

class TodoListItem extends React.Component {

  state = {
    complete: false
  };

  componentWillMount() {
    let { complete } = this.props.item;
    this.setState({ complete });
  }

  handleChange = () => {
    let { onUpdateItem, id, item } = this.props;
    item.complete = !item.complete;

    this.setState({ complete: item.complete }, () => {
      setTimeout(() => {
        onUpdateItem(id, item);
      }, 300);
    });
  };

  handleRemove = () => {
    const { onDeleteItem, id, item } = this.props;
    onDeleteItem(id, item);
  };

  render() {
    let { content, order } = this.props.item;
    let { complete } = this.state;

    return (
      <li className="TodoListItem collection-item">
          <span className="TodoListItem-content">
            {content}
          </span>
          <div className="TodoListItem-controls">
            <div className="TodoListItem-complete switch">
              <label>
                Incomplete
                <input type="checkbox"
                  checked={complete}
                  onChange={this.handleChange} />
                <span className="lever"></span>
                Complete
              </label>
            </div>
            <a
              className="TodoListItem-remove waves-effect waves-light btn"
              onClick={this.handleRemove}>
              <i className="material-icons">delete</i>
            </a>
        </div>
      </li>
    );
  }

  static propTypes = {
    id: React.PropTypes.number.isRequired,
    item: React.PropTypes.any.isRequired,
    onDeleteItem: React.PropTypes.func.isRequired,
    onUpdateItem: React.PropTypes.func.isRequired
  };

  static displayName = "TodoListItem";
}
