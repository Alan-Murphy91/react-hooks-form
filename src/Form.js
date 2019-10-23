import React from 'react';
import useForm from './useForm';

const Form = () => {
	const { values, handleChange, handleSubmit } = useForm();
	return (
		<div className="section is-fullheight">
			<div className="container">
				<div className="column is-4 is-offset-4">
					<div className="box">
						<form onSubmit={handleSubmit}>
							<div className="field">
								<label className="label">Email Address</label>
								<div className="control">
									<input className="input" type="email" name="email" onChange={handleChange} value={values.email} required />
								</div>
							</div>
							<div className="field">
								<label className="label">Password</label>
								<div className="control">
									<input className="input" type="password" name="password" onChange={handleChange} value={values.password} required />
								</div>
							</div>
							<button type="submit" className="button is-block is-info is-fullwidth">Login</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Form;


// The below is the same but using a class based Component

// import React, { Component } from 'react';

// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//     };
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   login() {
//     const { email, password } = this.state;
//     console.log(`${email}, ${password}`);
//   }

//   render() {
//     const { email, password } = this.state;
//     return (
//       <div className="section is-fullheight">
//         <div className="container">
//           <div className="column is-4 is-offset-4">
//             <div className="box">
//               <form onSubmit={this.login}>
//                 <div className="field">
//                   <label className="label">Email Address</label>
//                   <div className="control">
//                     <input className="input" type="email" name="email" onChange={this.handleChange} value={email || ''} required />
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label className="label">Password</label>
//                   <div className="control">
//                     <input className="input" type="password" name="password" onChange={this.handleChange} value={password || ''} required />
//                   </div>
//                 </div>
//                 <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Form;
