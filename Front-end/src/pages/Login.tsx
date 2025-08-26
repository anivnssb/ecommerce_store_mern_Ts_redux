import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  return (
    <div className="login">
      <main>
        <h1 className="heading">Login</h1>
        <div>
          <label htmlFor="gender_login">Gender</label>
          <select
            id="gender_login"
            name="gnder"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="dob_login">Date Of Birth</label>
          <input
            id="dob_login"
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <p>Already Signed In Once</p>
          <button>
            <FcGoogle />
            <span>Sign in with Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
