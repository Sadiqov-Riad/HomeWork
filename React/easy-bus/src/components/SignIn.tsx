import React from 'react'

interface SignInProps {
  onClose: () => void
  onSwitchToSignUp: () => void
  onAuthSuccess: () => void
}

const SignIn: React.FC<SignInProps> = ({ onClose, onSwitchToSignUp, onAuthSuccess }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4">Sign In</h2>
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
            onClick={onSwitchToSignUp}
          >
            Create Account
          </span>
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 bg-gray-300 rounded">Cancel</button>
          <button
            onClick={() => {
              onAuthSuccess()
              onClose()
            }}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn
