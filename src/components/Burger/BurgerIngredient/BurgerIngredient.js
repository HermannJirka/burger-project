import React from 'react';
import classes from './BurgerIngredient.module.css';
const burgerIngredient = (props) => {
    let ingredient = null;
    switch(props.type){
        case('bread-bottom'):
        ingredient = <div className={classes.BreadBotton}></div>;
        break;
        case('bread-top'):
        ingredient = <div className={classes.BreadTop}></div>;
        break;
    }
}

export default burgerIngredient;