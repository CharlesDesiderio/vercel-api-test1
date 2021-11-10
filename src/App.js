const App = () => {

  const callApi = () => {
    fetch('https://vercel-api-test1.vercel.app/api/fetch.js')
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <button onClick={callApi}>Fetch</button>
    </div>
  )
}
export default App