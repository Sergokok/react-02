import React from 'react';
import { useForm } from 'react-hook-form';


function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="name"
				{...register('name', { required: true, min: 2, maxLength: 30 })}
			/>
			<input
				type="text"
				placeholder="professia"
				{...register('professia', { required: true, min: 2, maxLength: 30 })}
			/>

			<input type="submit" />
		</form>
	);
}

// variant 2
// import React from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName", { required: true, maxLength: 20 })} />
//       <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
//       <input type="number" {...register("age", { min: 18, max: 99 })} />
//       <input type="submit" />
//     </form>
//   );
// }

// variant 3 (with validation) errors
// import React from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, formState: { errors }, handleSubmit } = useForm();

//   const onSubmit = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName", { required: true })} />
//       {errors.firstName?.type === 'required' && "First name is required"}

//       <input {...register("lastName", { required: true })} />
//       {errors.lastName && <p>Last name is required</p>}

//       <input {...register("mail", { required: "Email Address is required" })} />
//       <p>{errors.mail?.message}</p>

//       <input type="submit" />
//     </form>
//   );
// }
