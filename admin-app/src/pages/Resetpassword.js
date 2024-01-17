import React from 'react';
import CustomInput from "../components/CustomInput";

const Resetpassword = () => {
  return (
    <div className='py-5' style={{background:"#ff6347", minHeight:"100vh"}}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
            <h3 className='text-center title'>Login</h3>
            <p className='text-center'>Login to your account to continue.</p>
            <form action=''>
                <CustomInput type="password" label="Password" id="pass"  />
                <button
                   className='border-0 px-3 py-2 text-white fw-bold w-100'
                   style={{background:"#ff6347"}}
                   type="submit"
                >Login</button>
            </form>
        </div>
    </div>
  )
}

export default Resetpassword;