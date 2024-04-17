// import React, { useState } from 'react';
// import './FormData.css';

// function FormData() {
//   const [inputArr, setInputArr] = useState([]);
//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     gender: '',
//     country: '',
//     subscribe: false, 
//   });

//   const formHandler = (e) => {
//     e.preventDefault();
//     const { name, value, type, checked } = e.target;
//     const newValue = type === 'checkbox' ? checked : value;
  
//     setData(prevData => ({
//       ...prevData,
//       [name]: newValue,
//     }));
//   };
  
//   const submitHandle = (e) => {
//     e.preventDefault();
//     setInputArr([...inputArr, data]);
  
//     console.log("Current Data:", data);
//     console.log("Input Array:", inputArr);
  
//     setData({
//       name: '',
//       email: '',
//       mobile: '',
//       gender: '',
//       country: '',
//       subscribe: false,
//     });
//   };
  

//   return (
//     <>
//     <div className='formData'>
//       <div className='apply_box'>
//       <h1>Signup Form</h1>
//       <form onSubmit={submitHandle}>
//         <div className='formInput'>
//           <label className='label'>Name : </label>
//           <input
//             type='text'
//             name='name'
//             value={data.name}
//             placeholder='Enter Your Name....'
//             onChange={formHandler}
//           />
//         </div>
//         <div>
//           <label className='label'>Email : </label>
//           <input
//             type='email'
//             name='email'
//             value={data.email}
//             placeholder='Enter Your Email....'
//             onChange={formHandler}
//           />
//         </div>
//         <div>
//           <label className='label'>Mobile No. :</label>
//           <input
//             type='number'
//             name='mobile'
//             value={data.mobile}
//             placeholder='Enter Your Mobile...'
//             onChange={formHandler}
//           />
//         </div>
//         <div>
//           <label>Gender :</label>
//           <select name='gender' value={data.gender} onChange={formHandler}>
//             <option value=''>Select</option>
//             <option value='male'>Male</option>
//             <option value='female'>Female</option>
//           </select>
//         </div>
//         <div>
//           <label>Country :</label>
//           <input
//             type='radio'
//             name='country'
//             value='india'
//             checked={data.country === 'india'}
//             onChange={formHandler}
//           />{' '}
//           India
//           <input
//             type='radio'
//             name='country'
//             value='outSide'
//             checked={data.country === 'outSide'}
//             onChange={formHandler}
//           />{' '}
//           Outside
//         </div>
//         <div>
//           <label>Subscribe : </label>
//           <input
//             type='checkbox'
//             name='subscribe'
//             checked={data.subscribe}
//             onChange={formHandler}
//           />{' '}
//           Yes
//         </div>
//         <div>
//           <button type='submit'>Submit</button>
//         </div>
//       </form>
//       </div>
//     </div>
//     </>
//   );
// }

// export default FormData;

import React, { useState } from 'react';
import './FormData.css';

function FormData() {
  const [inputArr, setInputArr] = useState([]);
  const [data, setData] = useState({
    name: '',
    email: '',
    mobile: '',
    gender: '',
    country: '',
    subscribe: false, 
  });

  const formHandler = (e) => {
    e.preventDefault();
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
  
    setData(prevData => ({
      ...prevData,
      [name]: newValue,
    }));
  };
  
  const submitHandle = (e) => {
    e.preventDefault();
    setInputArr([...inputArr, data]);
  
    console.log("Current Data:", data);
    console.log("Input Array:", inputArr);
  
    setData({
      name: '',
      email: '',
      mobile: '',
      gender: '',
      country: '',
      subscribe: false,
    });
  };

  return (
    <>
      <div className='formData'>
        <div className='apply_box'>
          <h1>Signup Form</h1>
          <form onSubmit={submitHandle}>
            <div className='formInput'>
              <label className='label'>Name : </label>
              <input
                type='text'
                name='name'
                value={data.name}
                placeholder='Enter Your Name....'
                onChange={formHandler}
              />
            </div>
            <div>
              <label className='label'>Email : </label>
              <input
                type='email'
                name='email'
                value={data.email}
                placeholder='Enter Your Email....'
                onChange={formHandler}
              />
            </div>
            <div>
              <label className='label'>Mobile No. :</label>
              <input
                type='number'
                name='mobile'
                value={data.mobile}
                placeholder='Enter Your Mobile...'
                onChange={formHandler}
              />
            </div>
            <div>
              <label>Gender :</label>
              <select name='gender' value={data.gender} onChange={formHandler}>
                <option value=''>Select</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
            <div>
              <label>Country :</label>
              <input
                type='radio'
                name='country'
                value='india'
                checked={data.country === 'india'}
                onChange={formHandler}
              />{' '}
              India
              <input
                type='radio'
                name='country'
                value='outSide'
                checked={data.country === 'outSide'}
                onChange={formHandler}
              />{' '}
              Outside
            </div>
            <div>
              <label>Subscribe : </label>
              <input
                type='checkbox'
                name='subscribe'
                checked={data.subscribe}
                onChange={formHandler}
              />{' '}
              Yes
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>

      {/* Table to display form data */}
      <div className='tableContainer'>
        <h2>Form Data</h2>
        <table border='1'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>Country</th>
              <th>Subscribe</th>
            </tr>
          </thead>
          <tbody>
            {inputArr.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.gender}</td>
                <td>{item.country}</td>
                <td>{item.subscribe ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormData;

