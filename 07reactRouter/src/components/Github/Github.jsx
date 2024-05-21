import React from 'react'
import { useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {
    const followers = useLoaderData()
    // const [followers, setFollowers] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/AniOpd')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setFollowers(data)
    //     })
    // }, [])


  return (
    <div className='text-center m-4 bg-gray-300 text-cyan-700 p-4 text-3xl'>
      Github Public-Repos: {followers.public_repos}
      <img src={followers.avatar_url} alt="pic" width={300} />
    </div>
  )
}

export default Github


export const githubInfoLoader= async ()=>{
    const res = await fetch('https://api.github.com/users/AniOpd')
    return res.json()
}