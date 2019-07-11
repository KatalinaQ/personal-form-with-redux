import React from 'react';
import { connect } from 'react-redux';
import { sendColorPropAction } from '../redux/actions/appActions';

class RGBComponent extends React.Component {
    changeColor = (e) => {
        this.props.changeColorProp(e.target.name);
    }
    render() {
        return (
            <React.Fragment>
                <button
                    name="red"
                    onClick={this.changeColor}>R</button>
                <button
                    name="green"
                    onClick={this.changeColor}>G</button>
                <button
                    name="blue"
                    onClick={this.changeColor}>B</button>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        changeColorProp: (colorProp) => dispatch(sendColorPropAction(colorProp))
    }
}
export default connect(null, mapDispatchToProps)(RGBComponent);