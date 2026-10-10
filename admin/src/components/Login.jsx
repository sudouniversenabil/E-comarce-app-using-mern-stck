import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { backendURL } from '../App'
import { toast } from 'react-toastify'


const Login = ({ Tok }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()

            const response = await axios.post(backendURL + 'api/user/admin', {
                email,
                password: pass,
            })
            console.log(response)
            if (response.data.success) {
                Tok(response.data.token);
            } else {
                console.log(response.data.message);
                
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || error.message)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 border border-slate-700/10">
                <h1 className="text-2xl font-bold text-slate-800 text-center mb-6">
                    Admin Panel
                </h1>

                <form className="space-y-4" onSubmit={onSubmitHandler}>
                    <div>
                        <p className="text-sm font-medium text-slate-700 mb-1">
                            Email Address
                        </p>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="rounded-md w-full px-3 py-2 border border-slate-300 outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent transition-all"
                            type="email"
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                    <div>
                        <p className="text-sm font-medium text-slate-700 mb-1">
                            Password
                        </p>
                        <input
                            onChange={(e) => setPass(e.target.value)}
                            value={pass}
                            className="rounded-md w-full px-3 py-2 border border-slate-300 outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent transition-all"
                            type="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 bg-black hover:bg-slate-800 text-white font-medium py-2 px-4 rounded-md transition-colors shadow-md"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login