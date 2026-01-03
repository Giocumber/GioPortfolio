const ContributionList = ({role, contributions}) => {
  return (
    <div>
        <h1 className="text-2xl lg:text-4xl text-yellow font-bold my-4">Key Contributions</h1>
        <div className="bg-gray-800 p-2 lg:p-4 rounded-xl text-md lg:text-xl">
            <h2 className="font-semibold">General Role: {role}</h2>
            <p className="whitespace-pre-line"> {contributions}</p>
        </div>
    </div>
  )
}

export default ContributionList