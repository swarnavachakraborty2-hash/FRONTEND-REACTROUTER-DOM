import { useEffect, useState } from "react"

export default function Github() {
    const [data, setData] = useState(null)
    const [inp, setInp] = useState("")

    useEffect(() => {
        if (!inp) return;

        fetch(`https://api.github.com/users/${inp}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [inp])

    return (
        <div className="text-center p-6">
            <input
                type="text"
                value={inp}
                onChange={(e) => setInp(e.target.value)}
                placeholder="Enter GitHub username"
                className="border p-2"
            />

            {data && (
                <div className="mt-4 bg-gray-600 text-white p-4">
                    <h2>{data.name}</h2>
                    <p>Followers: {data.followers}</p>
                    <img src={data.avatar_url} width={200} />
                </div>
            )}
        </div>
    )
}
