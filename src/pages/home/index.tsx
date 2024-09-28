
import { useEffect, useState } from 'react'
import { Card, Header } from '../../components/index'
import api from '../../services/api'
import { Container } from "./styles"
import { Movie } from '../../validators/types'

function Home() {

    const [data, setData] = useState<Movie[]>([])
    const [filteredData, setFilteredData] = useState<Movie[]>([])

    useEffect(() => {

        async function loadData() {
            try {
                const { data: { docs } } = await api.get('movie')
                setData(docs)
                setFilteredData(docs)
            } catch (err) {
                console.error('Error fetching movies:', err)
            }

        }

        loadData()

    }, [])




    return (
        <Container>
            <Header data={data} setFilteredData={setFilteredData} />
            <Card filteredData={filteredData} />
        </Container>
    )
}

export default Home