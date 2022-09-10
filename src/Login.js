import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { validate } from './validate'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toastify';
import styles from './Form.module.css'
const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    useEffect(() => {
        setErrors(validate(data,'login'))
    }, [data, touched])

    const changeHandler = e => {
      setData({ ...data, [e.target.name]: e.target.value })

    }
    const focuseHandler = e => {
        setTouched({ ...touched, [e.target.name]: true })
    }

    const submitHandler = e => {
        e.preventDefault()
        if (!Object.keys(errors).length) {
            notify('You loged in Successfully', 'success')
        } else {
            notify('Invalid data', 'error')
            setTouched({
                email: true,
                password: true,

            })
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2 className={styles.header}>
                    Login
                </h2>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                        className={
                            (errors.email && touched.email) ?
                                styles.uncompleted
                                : styles.formInput
                        }
                        value={data.email}
                        name='email'
                        type='email'
                        onChange={changeHandler}
                        onFocus={focuseHandler}
                    />
                    {errors.email && touched.email && <span>{errors.email}</span>}

                </div>
                <div className={styles.formField}>
                    <label>password</label>
                    <input
                        className={
                            (errors.password && touched.password) ?
                                styles.uncompleted
                                : styles.formInput
                        }
                        value={data.password}
                        name='password'
                        type='password'
                        onChange={changeHandler}
                        onFocus={focuseHandler}
                    />
                    {errors.password && touched.password && <span>{errors.password}</span>}

                </div>
            
            
                <div className={styles.fromButons}>
                    <Link to='/singup'>Sing up</Link>
                    <button type='submit'>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login