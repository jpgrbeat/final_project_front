import React from 'react'
import {Form,Button} from 'semantic-ui-react'

import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from 'semantic-ui-calendar-react';




class DateTimeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      time_start: '',
      time_end: '',
    };
  }

  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
      this.props.setDateTime(name, value)
    }
  }

  render() {
    return (
      <Form>
        <DateInput
          name="date"
          placeholder="Date"
          value={this.state.date}
          iconPosition="left"
          onChange={this.handleChange} />
        <TimeInput
          name="time_start"
          placeholder="Time Start"
          value={this.state.time_start}
          iconPosition="left"
          onChange={this.handleChange} />
          <TimeInput
            name="time_end"
            placeholder="Time End"
            value={this.state.time_end}
            iconPosition="left"
            onChange={this.handleChange} />
      </Form>
    );
  }
}
export default DateTimeForm
