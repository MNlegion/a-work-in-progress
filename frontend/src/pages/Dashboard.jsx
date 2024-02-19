import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Dashboard() {
  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)

  // If user is not logged in, redirect to main home page
  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user, navigate])

  return <div>Dashboard</div>
}

export default Dashboard