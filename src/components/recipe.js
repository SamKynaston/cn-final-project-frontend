import './style.css';


const Recipe = (props) => {

    return (
        <div className="recipePage">
        <h2>{props.cookies[0].recipe.label}</h2>
        {/* <p>{allCookies.recipe.ingredientLines}</p>
        <embed type="text/html" src={allCookies.recipe.shareAs} width="1000" height="800"></embed> */}
        </div>
    );
}

export default Recipe;