'use client'

import { useState } from 'react'

export default function TestConnection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [result, setResult] = useState<any>(null)

  const testConnection = async () => {
    setStatus('loading')
    try {
      const response = await fetch('/api/test-sheets')
      const data = await response.json()
      setResult(data)
      setStatus(data.success ? 'success' : 'error')
    } catch (error) {
      setStatus('error')
      setResult(error)
    }
  }

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-semibold mb-4">Test Google Sheets Connection</h3>
      
      <button
        onClick={testConnection}
        disabled={status === 'loading'}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {status === 'loading' ? 'Testing...' : 'Test Connection'}
      </button>

      {result && (
        <div className="mt-4">
          <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      {status === 'success' && (
        <p className="mt-4 text-green-600">✅ Connection successful!</p>
      )}

      {status === 'error' && (
        <p className="mt-4 text-red-600">❌ Connection failed. Check console for details.</p>
      )}
    </div>
  )
} 