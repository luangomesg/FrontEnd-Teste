import { useCallback, useEffect, useRef, useState } from 'react';
import Logo from '../../assets/logo.svg';
import { BottomHeader, TopHeader } from './styles';
import { Movie } from '../../validators/types';

interface CardProps {
    data: Movie[];
    setFilteredData: React.Dispatch<React.SetStateAction<Movie[]>>;
}

export function Header({ data, setFilteredData }: CardProps) {
    const input = useRef<HTMLInputElement | null>(null);
    const [aveValues, setAveValues] = useState({ runtime: 0, budget: 0 });
    const [sortOrder, setSortOrder] = useState<string>("");

    function aveMovies(data: Movie[]) {
        const runtime = data.reduce((acc, cur) => cur.runtimeInMinutes + acc, 0) / data.length;
        const budget = data.reduce((acc, cur) => cur.budgetInMillions + acc, 0) / data.length;

        setAveValues({ runtime, budget });
    }

    const inputChange = useCallback(() => {
        let newData = data.filter((movie) =>
            movie.name.toLowerCase().includes(input.current?.value.toLowerCase() || '')
        );

        // Aplicar ordenação aqui
        if (sortOrder) {
            newData = newData.sort((a, b) =>
                sortOrder === "big" ? b.budgetInMillions - a.budgetInMillions : a.budgetInMillions - b.budgetInMillions
            );
        }

        aveMovies(newData);
        setFilteredData(newData);
    }, [data, setFilteredData, sortOrder])



    function handleSortChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSortOrder(event.target.value);
        inputChange(); // Chama inputChange para aplicar a nova ordenação
    }

    useEffect(() => {
        aveMovies(data);
        inputChange(); // Atualiza a lista filtrada na montagem inicial
    }, [data, inputChange]);

    return (
        <>
            <TopHeader>
                <img src={Logo} alt="Logo Image" />
                <p>Frontend(TS) Test-</p>
            </TopHeader>

            <BottomHeader>
                <h1>Lord of the Rings Movies</h1>
                <div className='about'>
                    <div>
                        <p>{aveValues.runtime ? aveValues.runtime : 0} min</p>
                        <p>${aveValues.budget ? Math.floor(aveValues.budget * 100) / 100 : 0}M</p>
                    </div>
                    <div className='filter'>
                        <input type="text" placeholder='Filter movies by name' ref={input} onChange={inputChange} />
                        <select name="sort" onChange={handleSortChange}>
                            <option value="">Sort by budget</option>
                            <option value="big">Bigger</option>
                            <option value="min">Minor</option>
                        </select>
                    </div>
                </div>
            </BottomHeader>
        </>
    );
}
