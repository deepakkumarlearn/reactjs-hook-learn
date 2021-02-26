import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h1>firstName{name.firstName}</h1>
      <h1>firstName{name.lastName}</h1>

      {JSON.stringify(name)}
    </div>
  );
};

export default UseStateObject;
