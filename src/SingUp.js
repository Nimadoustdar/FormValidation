import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { validate } from './validate'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toastify';
import styles from './Form.module.css'
import { type } from '@testing-library/user-event/dist/type';
const SingUp = () => {

    const [data, setData] = useState({
        user: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccept: false
    })

    const [errors, setErrors] = useState({})

    const [touched, setTouched] = useState({})

    useEffect(() => {
        setErrors(validate(data,'singup'))
    }, [data, touched])

    const changeHandler = e => {
 
        if (e.target.name === 'isAccept') {
            setData({ ...data, [e.target.name]: e.target.checked })
        } else {
            setData({ ...data, [e.target.name]: e.target.value })
        }
    }
    const focuseHandler = e => {
        setTouched({ ...touched, [e.target.name]: true })
    }

    const submitHandler = e => {
        e.preventDefault()
        if (!Object.keys(errors).length) {
            notify('You Singed in Successfully', 'success')
        } else {
            notify('Invalid data', 'error')
            setTouched({
                user: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccept: true

            })
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2 className={styles.header}>
                    SingUp
                </h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input
                        className={
                            (errors.user && touched.user) ?
                                styles.uncompleted :
                                styles.formInput
                        }
                        value={data.user}
                        name='user'
                        type='text'
                        onChange={changeHandler}
                        onFocus={focuseHandler}
                    />
                    {errors.user && touched.user && <span>{errors.user}</span>}
                </div>
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
                <div className={styles.formField}>
                    <label>confirm Password</label>
                    <input
                        className={
                            (errors.confirmPassword && touched.confirmPassword) ?
                                styles.uncompleted
                                : styles.formInput
                        }
                        value={data.confirmPassword}
                        name='confirmPassword'
                        type='password'
                        onChange={changeHandler}
                        onFocus={focuseHandler}
                    />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}

                </div>
                <div className={styles.formField}>
                    <div className={styles.checkboxContainer}>
                        <label htmlFor='acc'>I accept term of privacy policy</label>
                        <input
                            id='acc'
                            value={data.isAccept}
                            name='isAccept'
                            type='checkbox'
                            onChange={changeHandler}
                            onFocus={focuseHandler}
                        />
                    </div>

                    {errors.isAccept && touched.isAccept && <span>{errors.isAccept}</span>}

                </div>
                <div className={styles.fromButons}>
                    <Link to='/login'>Login</Link>
                    <button type='submit'>SingUp</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default SingUp