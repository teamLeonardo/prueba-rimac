import React from 'react'

const GroupInput = () => {
  return (
    <div className="join grid h-[56px] w-full grid-cols-[40%,1fr]">
      <select className="select-bordered select join-item h-full">
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
        className="input-bordered input join-item h-full w-full"
      />
    </div>
  )
}

export default GroupInput
