import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  canAdd: PropTypes.string.isRequired,
  onQuery: PropTypes.func.isRequired,
};

export default class QueryAndSaveBtns extends React.Component {
  render() {
    const saveClasses = classnames('btn btn-default', {
      'disabled disabledButton': this.props.canAdd !== 'True',
    });

    return (
      <div className="btn-group query-and-save">
        <button type="button" className="btn btn-primary" onClick={this.props.onQuery}>
          <i className="fa fa-bolt"></i>Query
        </button>
        <button type="button"
                className={saveClasses}
                onClick={this.props.onSave}
                data-target="#save_modal"
                data-toggle="modal"
        >
          <i className="fa fa-plus-circle"></i>Save as
        </button>
      </div>
    );
  }
}

QueryAndSaveBtns.propTypes = propTypes;