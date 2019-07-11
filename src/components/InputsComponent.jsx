import React from 'react';
import { connect } from 'react-redux';
import { sendNamePropAction } from '../redux/actions/appActions';
import { sendAgePropAction } from '../redux/actions/appActions';
import { sendSkillsPropAction } from '../redux/actions/appActions';

class InputsComponent extends React.Component {

    state = {
        inputNameValue: '',
        inputAgeValue: '',
        inputSkillsValue: '',
    }

    onChangeValue = (e) => {
        switch (e.target.name) {
            case "name":
                this.setState({ inputNameValue: e.target.value });
                break;
            case "age":
                this.setState({ inputAgeValue: e.target.value });
                break;
            case "skills":
                this.setState({ inputSkillsValue: e.target.value });
                break;
            default:
                break;
        }
    }

    sendPropValue = (e) => {
        switch (e.target.name) {
            case "name":
                const nameProp = this.state.inputNameValue;
                this.setState({ inputNameValue: '' });
                this.props.changeNameProp(nameProp);
                break;
            case "age":
                const ageProp = this.state.inputAgeValue;
                this.setState({ inputAgeValue: '' });
                this.props.changeAgeProp(ageProp);
                break;
            case "skills":
                const skillsProp = this.state.inputSkillsValue;
                this.setState({ inputSkillsValue: '' });
                this.props.changeSkillsProp(skillsProp);
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input
                        value={this.state.inputNameValue}
                        name="name" onChange={this.onChangeValue}
                        onBlur={this.sendPropValue} />
                    <input
                        value={this.state.inputAgeValue}
                        name="age"
                        onChange={this.onChangeValue}
                        onBlur={this.sendPropValue} />
                    <input
                        value={this.state.inputSkillsValue}
                        name="skills"
                        onChange={this.onChangeValue}
                        onBlur={this.sendPropValue} />
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {

        changeNameProp: (nameProp) => dispatch(sendNamePropAction(nameProp)),
        changeAgeProp: (ageProp) => dispatch(sendAgePropAction(ageProp)),
        changeSkillsProp: (skillsProp) => dispatch(sendSkillsPropAction(skillsProp))
    }
}
export default connect(null, mapDispatchToProps)(InputsComponent);
