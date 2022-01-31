import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import getDoneRecipes from '../helpers/utils';

export default function DoneRecipes() {
  const [filter, setFilter] = useState('All');
  const [doneList, setDoneList] = useState([]);

  useEffect(() => {
    setDoneList(getDoneRecipes(filter));
  }, [filter]);

  return (
    <>
      <Header title="Done Recipes" search={ false } />
      <main>
        <div>
          <Button
            test="filter-by-all-btn"
            text="All"
            onClick={ () => setFilter('All') }
          />
          <Button
            test="filter-by-food-btn"
            text="Food"
            onClick={ () => setFilter('Food') }
          />
          <Button
            test="filter-by-drink-btn"
            text="Drinks"
            onClick={ () => setFilter('Drinks') }
          />
        </div>
        {doneList
          && doneList.map(({ name, category, image, doneDate, tags }, i) => (
            <div key={ i }>
              <img
                data-testid={ `${i}-horizontal-image` }
                src={ image }
                alt={ `${name}` }
              />
              <p data-testid={ `${i}-horizontal-top-text` }>{category}</p>
              <p data-testid={ `${i}-horizontal-name` }>{name}</p>
              <p data-testid={ `${i}-horizontal-done-date` }>{doneDate}</p>
              <Button
                test={ `${i}-horizontal-share-btn` }
                src={ shareIcon }
                onClick={ () => {} }
              />
              <ul>
                {tags
                  && tags.map((eachTag) => (
                    <li
                      key={ `i-${eachTag}` }
                      data-testid={ `${i}-horizontal-tag` }
                    >
                      {eachTag}
                    </li>))}
              </ul>
            </div>
          ))}
      </main>
    </>
  );
}
