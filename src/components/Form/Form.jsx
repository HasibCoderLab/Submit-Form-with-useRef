import React, { useRef } from 'react'

const Form = () => {
    const nameRef = useRef(null)
    const passRef = useRef(null)
    const emailRef = useRef(null)
    
    const handleSubmitForm = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmitForm}
                className="bg-sky-700 p-10 space-y-3 ">
                <input ref={nameRef} type="text" placeholder="Name" name='text' required
                    className="block w-full p-2 border border-gray-300 " />
                <input ref={passRef}  type="password" placeholder="Password" name='password' required
                    className="block w-full p-2 border border-gray-300" />
                <input ref={emailRef} type="email" placeholder="Email " name='email' required
                    className="block w-full p-2 border border-gray-300 rounded" />

                <input type="submit" value="submit"
                    className="block w-full p-2 border bg-blue-950 border-gray-300 rounded-3xl  cursor-pointer " />
                <p>  </p>
            </form>
        </div>
    )
}

export default Form