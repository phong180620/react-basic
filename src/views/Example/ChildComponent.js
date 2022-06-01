import React from "react";
import "./Demo.scss";
import { toast } from 'react-toastify';
class ChildComponent extends React.Component {

    // jsx => return block
    // Fragment



    // handleChangfistName = (event) => {
    //     this.setState({
    //         fistName: event.target.value
    //     })
    // }
    // handleChanglatsName = (event) => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }

    // handleOnSubmit = (event) => {
    //     event.preventDefault();
    //     alert('Submit completed')
    //     console.log('Check data input: ', this.state)
    // }

    state = {
        showJob: false


    };
    HandleOnHide = () => {
        this.setState({
            showJob: !this.state.showJob

        })

    }
    HandleOnClickDelete = (job) => {

        console.log('>>>HandleOnClickDelete: ', job)
        this.props.deleteAJob(job)
        toast.success('Delete sucess !')

    }

    render() {

        let { arrJobs } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'showJobs=true  ' : 'showJobs=false';
        console.log('>>> Check props :', check)

        return (
            <React.Fragment>
                {showJob === false ?
                    <div >
                        <button
                            className="btn-show"
                            onClick={() => this.HandleOnHide()}>Show</button>
                    </div>

                    :
                    <>
                        <div className="Job-lists" >
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title}-{item.salary}
                                            <></> <span onClick={() => this.HandleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div ><button onClick={() => this.HandleOnHide()}>Hide</button></div >
                    </>
                }

            </React.Fragment>
        )
    }
}
export default ChildComponent;