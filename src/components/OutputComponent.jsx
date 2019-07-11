import React from 'react';
import { connect } from 'react-redux';

class OutputComponent extends React.Component {

    state = {
        skills: this.props.skills
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.skills !== nextProps.skills && nextProps.skills !== '') {
            const prevSkills = this.state.skills;
            this.setState({
                skills: `${prevSkills}, ${nextProps.skills}`
            });
        }
    }

    render() {
        const currentColor = this.props.color;
        return (
            <React.Fragment>
                <div style={{background: currentColor}}>
                    <div>
                        <label>Name: {this.props.name}</label>
                    </div>
                    <div>
                        <label>Age: {this.props.age}</label>
                    </div>
                    <div>
                        <label>Skills: {this.state.skills} </label>
                    </div>
                </div>
                <div>
                    Color: {this.props.color}
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        name: state.appReducer.nameProp,
        age: state.appReducer.ageProp,
        skills: state.appReducer.skillsProp,
        color: state.appReducer.colorProp
    }

}

export default connect(mapStateToProps, null)(OutputComponent);