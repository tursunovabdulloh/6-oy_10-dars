
import React, { useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [userInput, setUserInput] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});


  function handleSubmit(e) {

    const data = JSON.parse(localStorage.getItem("usersData")) ?? [];
    localStorage.setItem("usersData", JSON.stringify([...data, userInput]));

    setUserInput({
      name: "",
      avatar: "",
      email: "",
      password: "",
    });
    setErrors({});
  }

  return (
    <section>
      <div className={style.container}>
        <div className={style.box}>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.passwordDiv}>
              <p className={style.password}>Name</p>
              <input
                value={userInput.name}
                onChange={(e) =>
                  setUserInput((prev) => ({ ...prev, name: e.target.value }))
                }
                className={style.passwordInp}
                type="text"
                placeholder="Ikrom"
              />
              {errors.name && <p className={style.error}>{errors.name}</p>}
            </div>
            <div className={style.passwordDiv}>
              <p className={style.password}>Avatar</p>
              <input
                value={userInput.avatar}
                onChange={(e) =>
                  setUserInput((prev) => ({ ...prev, avatar: e.target.value }))
                }
                className={style.passwordInp}
                type="url"
                placeholder="Avatar"
              />
              {errors.avatar && <p className={style.error}>{errors.avatar}</p>}
            </div>
            <div className={style.passwordDiv}>
              <p className={style.password}>Email</p>
              <input
                value={userInput.email}
                onChange={(e) =>
                  setUserInput((prev) => ({ ...prev, email: e.target.value }))
                }
                className={style.passwordInp}
                type="email"
                placeholder="username@gmail.com"
              />
              {errors.email && <p className={style.error}>{errors.email}</p>}
            </div>
            <div className={style.passwordDiv}>
              <p className={style.password}>Password</p>
              <input
                value={userInput.password}
                onChange={(e) =>
                  setUserInput((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                className={style.passwordInp}
                type="password"
                placeholder="Password"
              />
              {errors.password && (
                <p className={style.error}>{errors.password}</p>
              )}
            </div>
            <button className={style.submitBtn} type="submit">
              Submit
            </button>
          </form>

          <Link to={"/"} className={style.a}>
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
