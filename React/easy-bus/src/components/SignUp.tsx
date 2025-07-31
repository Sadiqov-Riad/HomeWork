import React from 'react'

interface SignUpProps {
  onClose: () => void
  onSwitchToSignIn: () => void
  onRegisterSuccess: () => void
}

const SignUp: React.FC<SignUpProps> = ({ onClose, onSwitchToSignIn, onRegisterSuccess }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
        />
        <div className="flex justify-between items-center mb-3">
          <span
            className="text-sm text-blue-600 cursor-pointer hover:underline"
            onClick={onSwitchToSignIn}
          >
            Already have an account?
          </span>
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 bg-gray-300 rounded">Cancel</button>
          <button
            onClick={() => {
              onRegisterSuccess()
              onClose()
            }}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
