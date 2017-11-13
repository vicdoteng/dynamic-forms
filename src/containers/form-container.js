import React from 'react';
import { getForm } from '../services/form-api';
import { mapFieldTypeToComponent } from '../services/form-service'

export class FormContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.getForm = getForm.bind(this);
        this.mapFieldTypeToComponent = mapFieldTypeToComponent.bind(this);
        this.getInitialState = this.getInitialState.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onReport = this.onReport.bind(this);

        this.state = this.getInitialState();
    }

    getInitialState() {
        const state = {};
        state.form = this.getForm();
        state.responses = state.form.reduce((obj, field) => { 
                obj[field.id] = '';
                return obj;
            }, {});
        return state;
    }

    onChange(e) {
        const updatedResponses = {...this.state.responses};
        updatedResponses[e.target.name] = e.target.value;

        return this.setState({...this.state, responses: updatedResponses});
    }

    onReport() {
        console.log(this.state);
    }

    render() { return (
        <div>
            <div>Form!</div>
            {this.state.form.map((field) => {
                const TagName = this.mapFieldTypeToComponent(field.fieldType);
            
                return TagName ? <TagName
                    key={field.id}
                    id={field.id}
                    label={field.label}
                    config={field.config}
                    value={this.state.responses[field.id]}
                    onChange={this.onChange}
                /> : null
            })}
            <button onClick={this.onReport}>Responses</button>
        </div>
    )}
}