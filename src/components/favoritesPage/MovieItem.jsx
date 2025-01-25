import { Button} from 'antd';
import { Card} from 'antd';
import { useActions } from '../hooks/useActions';
import { useFavorites } from '../hooks/useFavorites';



const { Meta } = Card;


export const MovieItem = ({movie}) => {

    const state = useFavorites();
    

    const {toggleTofavorites} = useActions();
    console.log(state);

    const isExist = state.some(m => m.id === movie.id)

    return (
        <div>
            <Card
                key={movie.id}
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src={movie.poster.url} />}
            >
                <Meta title={movie.name} description={`Жанр: ${movie.genres[0].name} Страна: ${movie.countries[0].name}  Год: ${movie.year}`} />
                <Button onClick={() => toggleTofavorites(movie)}> {isExist ? 'Удалить из избранного' : 'Добавить в избранное'} </Button>
            </Card>
            <span>{state.length}</span>
        </div>
        
    )
}