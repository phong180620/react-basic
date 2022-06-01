import React from "react";
import { toast } from 'react-toastify';


class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        console.log('Check data input: ', this.state)
        if (!this.state.title || !this.state.salary) {
            toast.error(' Please input complete information ')

            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        toast.success(' Submit success!')
        this.setState({
            title: '',
            salary: ''
        })

    }


    render() {

        return (
            <>
                <form>
                    <label htmlFor="fname">Job's title</label> <br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangTitleJob(event)} />
                    <br />
                    <label htmlFor="lname">Salary</label><br />
                    <input type="text" value={this.state.salary} onChange={(event) => this.handleChangSalary(event)}></input> <br />
                    <input type="submit" value='Submit' onClick={(event) => this.handleOnSubmit(event)}></input>

                </form>
            </>

        )
    }
}

export default AddComponent;