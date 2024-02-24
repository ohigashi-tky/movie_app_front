"use client"

import Header from '@/app/(app)/Header'
import axios from 'axios'
import { useEffect } from 'react'

// export const metadata = {
//     title: 'MovieApp',
// }

const Dashboard = () => {

    useEffect(() => {
        const fetchMovies = async() => {
            try {
                const response = await axios.get('api/getPopularMovies');
                console.log('取得:', response.data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchMovies();

    }, [])

    return (
        <>
            <Header title="MovieApp" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard