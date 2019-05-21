import React, {Component} from "react"
import FormComp from './FormComp';

class FormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }
    
    render() {
      return(
        <div>
          <FormComp 
            handleChange={this.handleChange}
            data={this.state}
            />
        </div>
      )
    }
}

export default FormContainer;