import React, { useState } from 'react'
import axios from 'axios'
import   {toast, Toaster}  from 'react-hot-toast';

const AddUserForm = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/adduser", { username, message });
      console.log(response.data);
      toast.success(response.data.message);
      setUsername("");
      setMessage("");
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className='flex justify-center my-20'>
        <form onSubmit={handleSubmission}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Add User</legend>

            <label className="label">Usernaame</label>
            <input type="text" className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

            <label className="label">Message</label>
            <input type="text" className="input" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />

            <button className="btn btn-neutral mt-4">ADD</button>
          </fieldset>
        </form>
      </div>
      <>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </>
    </>
  )
}

export default AddUserForm