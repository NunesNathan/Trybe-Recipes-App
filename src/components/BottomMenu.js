import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import Button from './Button';

export default function BottomMenu() {
  const history = useHistory();
  return (
    <footer id="bottom-menu" data-testid="footer">
      <Button
        test="drinks-bottom"
        text={
          <img src={ drinkIcon } alt="drinks-bottom" />
        }
        onClick={ () => history.push('/drinks') }
      />
      <Button
        test="explore-bottom"
        text={
          <img src={ exploreIcon } alt="explore-bottom" />
        }
        onClick={ () => history.push('/explore') }
      />
      <Button
        test="food-bottom"
        text={
          <img src={ mealIcon } alt="food-bottom" />
        }
        onClick={ () => history.push('/foods') }
      />
    </footer>);
}
