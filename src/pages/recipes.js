import Allcookies from '../components/allCookies';

const Recipes = (props) => {
    
    return (
        <div className='recipePage'>
            <h1 className='recipeHEAD'>Recipes</h1>
            <Allcookies allCookies={props.allCookies}/>
        </div>
    )
}

export default Recipes;