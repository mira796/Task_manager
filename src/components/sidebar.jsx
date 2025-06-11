export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-purple-700 text-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-8">📋 Task Manager</h2>
      <ul className="space-y-4">
        <li className="hover:bg-purple-600 px-3 py-2 rounded cursor-pointer">Dashboard</li>
        <li className="hover:bg-purple-600 px-3 py-2 rounded cursor-pointer">Tasks</li>
        <li className="hover:bg-purple-600 px-3 py-2 rounded cursor-pointer">Settings</li>
      </ul>
    </div>
  )
}
