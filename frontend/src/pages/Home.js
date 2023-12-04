import React from 'react'
import { useEffect } from 'react'
import WorkoutsDetails from '../components/WorkoutsDetails'
import WorkoutsForm from '../components/WorkoutsForm'
import {useWorkoutsContext} from '../hooks/useWorkoutsContext'

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()

    //fires when a component is rendered
    useEffect(() => {
        const fetchWorkouts = async () => {
            const respone = await fetch('/api/workouts')
            const json = await respone.json()

            if(respone.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        fetchWorkouts()
    }, [dispatch])

  return (
    <div className='home'>
        <div className="workouts">
            {workouts && workouts.map((workout) => (
                //props
                <WorkoutsDetails key={workout._id} workout={workout} />
            ))}
        </div>
        <WorkoutsForm />
    </div>
  )
}

export default Home