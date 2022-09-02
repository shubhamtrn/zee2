import React, { Component } from 'react'

export class Forms extends Component {
    constructor(){
        super()
        this.state={
            username:"",
            email_add:"",
            Mob_no:""
        }
    }
    usernameChange=(event)=>{
        this.setState({username:event.target.value})
    }
    emailChange=(event)=>{
        this.setState({email_add:event.target.value})
    }
    MobChange=(event)=>{
        this.setState({Mob_no:event.target.value})
    }

    onHandleSubmit=(e)=>{
        alert(`username: ${this.state.username}, email address:${this.state.email_add}, Mob. no. :${this.state.Mob_no}`)
    }
  render() {

    return (
      <div>
        <h3>Register Here</h3>
        <br />
        <form onSubmit={this.onHandleSubmit}>
            <label >Username</label><br />
            <input type="text" value={this.state.username} onChange={this.usernameChange} placeholder="Enter your name"/><br /><br />

            <input type="radio" name="sex" id="sexmale" />Male
            <input type="radio" name="sex" id="sexfem" />Female
            <br /><br />
            <label >Email Address</label><br />
            <input type="email" value={this.state.email_add} onChange={this.emailChange} placeholder="Enter your emailid"/><br /><br />

            <label >Mobile number</label><br />
            <input type="text" value={this.state.Mob_no} onChange={this.MobChange} placeholder="Enter your Mobile number"/><br /><br />

           
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Special
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Gallery</a></li>
            <li><a className="dropdown-item" href="#">Awards</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Branches</a></li>
          </ul>
        

            {/* <button type='submit'>Submit</button> */}
        </form>
      </div>
    )
  }
}

export default Forms

