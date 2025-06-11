export default function StatBox({ tasks }) {
  const total = tasks.length
  const todo = tasks.filter(t => t.status === "to-do").length
  const inProgress = tasks.filter(t => t.status === "in-progress").length
  const done = tasks.filter(t => t.status === "done").length

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-yellow-100 p-4 rounded text-center">
        <p className="text-lg font-bold">{todo}</p>
        <p className="text-sm text-gray-700">To Do</p>
      </div>
      <div className="bg-blue-100 p-4 rounded text-center">
        <p className="text-lg font-bold">{inProgress}</p>
        <p className="text-sm text-gray-700">In Progress</p>
      </div>
      <div className="bg-green-100 p-4 rounded text-center">
        <p className="text-lg font-bold">{done}</p>
        <p className="text-sm text-gray-700">Completed</p>
      </div>
    </div>
  )
}
