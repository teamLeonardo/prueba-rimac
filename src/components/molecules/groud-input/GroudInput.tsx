import React from 'react'

const GroupInput = () => {
  return (
    <div className="join grid h-[56px] w-full grid-cols-[40%,1fr]">
      <select className="join-item select-bordered select h-full">
        <option disabled selected>
          Filter
        </option>
        <option>Sci-fi</option>
        <option>Drama</option>
        <option>Action</option>
      </select>
      <input
        type="text"
        placeholder="Nro. de documento"
        // value={idNumber}
        // onChange={(e) => setIdNumber(e.target.value)}
        className="input-bordered join-item  input  h-full"
      />
    </div>
  )
}

export default GroupInput
