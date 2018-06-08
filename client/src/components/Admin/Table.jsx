import React, { Component } from 'react';
import './assets/css/Table.css';
class Table extends Component {
    constructor(props) {
      super(props);

      this.state = {
        checked: false
      };

      this.handleCheck = this.handleCheck.bind(this);
  }
  handleCheck(event) {
    if (!window.confirm("R U SURE"))
      event.target.checked = !event.target.checked;
      
    this.setState({checked: event.target.checked});
    console.log("After " + event.target.checked);
  }
	render() {
		const tableStyle = {
			"vertical-align": "middle",
			"text-align": "center"
		}
		return <div className="col-md-12">
        <div className="card table-with-switches" style={tableStyle}>
          <div className="card-header ">
            <h4 className="card-title">Table with Switches</h4>
          </div>
          <div className="card-body table-full-width">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th>Name</th>
                  <th>Job Position</th>
                  <th className="text-center">Salary</th>
                  <th className="text-center">Active</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td>Andrew Mike</td>
                  <td>Develop</td>
                  <td className="text-center">&euro; 99,225</td>
                  <td className="text-center">
                    <label class="switch">
                      <input type="checkbox" onChange={this.handleCheck} on />
                      <span class="slider round"></span>
                    </label>
                  </td>
                  <td className="td-actions text-center">
                   <button className="btn btn-danger" tooltip="Xóa" tooltip-position="buttom"><i className="nc-icon nc-simple-remove"></i></button> 
                   <button className="btn btn-success" tooltip="Sửa" tooltip-position="buttom"><i className="nc-icon nc-settings-tool-66"></i></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>;
	}
}

export default Table;