import React, { useState } from 'react';
import { addNewRecipe, editRecipe  } from "../../../state/actions/recipeActions";
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

const CardRen = (props) => {
    const {recipes} = props;

    const { name, recStatus, recipeMat, recipeDir } = recipes;
    return(
        <React.Fragment>
        <input
          type="text"
          value={props.name}
          onChange={props.handleChanges}
          placeholder="Add new Recipe Title"
        />
        <input
          type="text"
          value={props.recipeMat}
          onChange={props.handleMatChanges}
          placeholder="Add new Recipe Materials"
        />
        <input
          type="text"
          value={props.recipeDir}
          onChange={props.handleDirChanges}
          placeholder="Add new Recipe Directions"
        />
        <button
          onClick={
            props.addNewRecipe
            // this.props.addNewRecipe(this.state.newRecipe);
            // this.props.addNewRecipeMat(this.state.newRecipeMat);
          }
        >
          Add recipe
        </button>
      </React.Fragment>
    
        );
}
const mapStateToProps = (state) => {
    return ({    recipes: state.recipesReducer.recipes,
        editStatus: state.recipesReducer.recStatus})
}

export default connect(mapStateToProps,{addNewRecipe})(CardRen);