import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class Componentmyi extends React.Component {

    // jsx => return block
    // Fragment

    state = {

        fistName: '',
        lastName: '',
        arrJobs: [

            { id: 'abcJob1', title: 'Developers', salary: '500 ' },
            { id: 'abcJob2', title: 'Tester', salary: '400 ' },
            { id: 'abcJob3', title: 'Project Managers', salary: '1000 ' }

        ]
    };

    addNewJob = (job) => {

        // bien (job) la input dau vao cua addNewJob chung ta truyen cai gi vao thi chung ta phai in cai day ra

        console.log('check job from parent :', job)

        // let currenJobs = this.state.arrJobs;
        // currenJobs.push(job)

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            //arrJobs: currenJobs
        })
    }

    deleteAJob = (job) => {

        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })
    }

    render() {
        console.log('render', this.state)
        return (

            <React.Fragment>

                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />



            </React.Fragment>
        )
    }
}
export default Componentmyi;