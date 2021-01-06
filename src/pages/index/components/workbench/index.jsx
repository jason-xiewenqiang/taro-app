import React, { Component } from "react";
import { View } from "@tarojs/components";
import Modules from "./modules";
import Padding from "./padding";
import { connect } from "react-redux";
import { switchView, fetchGroup, fetchOrderCount } from '../../../../actions/modules';
@connect(({modules}) => ({modules}), (dispatch) => ({
  switchView: (view) => {
    dispatch(switchView(view))
  },
  fetchGroup: () => {
    dispatch(fetchGroup())
  },
  fetchOrderCount: () => {
    dispatch(fetchOrderCount())
  }
}))
class Workbench extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      cardTitle: ''
    }
  }
  componentDidMount() {
    this.props.fetchGroup();
    this.props.fetchOrderCount();
  }
  changeView(mession) {
    this.setState({
      cardTitle: mession.name,
    })
    this.props.switchView('padding')
  }
  render() {
    const {modules: { view }} = this.props;
    const { cardTitle } = this.state;
    return (
      <View>
        {view === "module" ? (
          <Modules changeView={this.changeView.bind(this)} />
        ) : (
          <Padding title={cardTitle}/>
        )}
      </View>
    );
  }
}
export default Workbench;
