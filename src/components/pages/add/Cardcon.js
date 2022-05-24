import React, { useEffect, useState } from 'react'; 
import { connect } from 'react-redux';
import { useHistory  } from 'react-router-dom';
import CardRen from './CardRen';
import { addNewRecipe, editRecipe  } from "../../../actions/recipeActions";

const Cardcon = ( { ...props }) =>{
    const {recipe} = props;
    const { push } = useHistory();
    const [rec,setRec ] = useState(
        
            {Recipes:[
                { name: "Shrimp Bobtail", recStatus: false, 
            recipeMat:"Shrimp, Sardines, Crab, Oyster, Clam, Lettus, Pineapple, Cabbage, Cranberrie, Strawberry, Optional To Addin: Tommato, fishkilts and stomach broth", 
            recipeDir: ['20 OZ Shrimp + Sardines ',
            '2LBs Crab with 9OZ oyster and clam chowder sauce mixed ',
            '1 LB each of Lettus, pineapple & cabbage mixed with 6 OZ Fresh Cranberries or Strawberries ', 
            'Combine All 3 Mixes together to Make the Shrimp Bobtail '] },
            { name: "Gumbo Soup", recStatus: false,  
            recipeMat:"Sardines, Yellow Mustard, Carrots, Cabbage, Lettus", 
            recipeDir: ['2 LBs spoons Sardines',' 8 OZ Yellow Mustard',
            '3 LBs spoons Lettus, Carrots, and Cabbage'] }
            ]}
    );
    const [recs, setRecs ] = useState({rec,recStatus: true})
    const handleChanges = (e) => {
        setRec({
            ...rec,
            [e.target.name]: e.target.value
        });
    }


    const [mat,setMat] = useState({
        newRecipe: "", recStatus: false, 
        newRecipeMat: "", editStatus: false, newRecipeDir:""
      });

    const handleMatChanges = (e)=>{
        setMat({
            ...mat,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNewRecipe(rec);
        console.log('submit '+rec) ;
        push('/recipes/');
    }

    useEffect(()=>{
        console.log(recipe.length );
    },[{}]);


    return (
        <CardRen recipe={rec} addNewRecipe={addNewRecipe}
        handleChanges={handleChanges} handleMatChanges={handleMatChanges} />
    )
}
const mapStateToProps = (state)=>{
    return ({
        recipes: state.recipesReducer.recipes,
        editStatus: state.recipesReducer.recStatus
    })
}
export default connect(mapStateToProps,{addNewRecipe,editRecipe})(Cardcon);