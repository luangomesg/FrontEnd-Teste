
import { Movie } from "../../validators/types"
import { Container } from "./styles"
import MoviesImage from '../../assets/movies.svg'
import AwardIcon from '../../assets/awardicon.svg'

interface CardProps {
    filteredData: Movie[]
}

export function Card({ filteredData }: CardProps) {

    return (
        <Container>
            {filteredData && filteredData.map((movie) => {
                return (
                    <div className="card" key={movie._id}>
                        <div className="card-image"><img src={MoviesImage} alt="Imagem-Filmes" /></div>
                        <div className="card-content">
                            <div>
                                <h2>{movie.name}</h2>
                                <span>{movie.runtimeInMinutes} min</span>
                            </div>
                            <div className="award-box">
                                <img src={AwardIcon} alt="Imagem-Premios" /> <span>{movie.academyAwardWins} Wins & {movie.academyAwardNominations} Nominatios</span>
                            </div>
                            <div className="money-box">
                                <div><p>Budget </p><span>${movie.budgetInMillions}M</span></div>
                                <div><p>Revenue </p><span>${movie.boxOfficeRevenueInMillions}M</span></div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Container>
    )
}