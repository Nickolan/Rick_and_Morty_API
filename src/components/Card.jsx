import style from './r&m.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { addCharacter, removeCharacter } from '../redux/action';
import { connect } from 'react-redux';

export default function Card({name, species, gender, image, onClose, id, addCharacter, removeCharacter, myFavorites}) {

   const [isFav, setIsFav] = React.useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeCharacter(id)
      } else {
         setIsFav(true);
         addCharacter({name, species, gender, image, id})
      }
   }
   // React.useEffect(() => {
   //    myFavorites.forEach((fav) => {
   //       if (fav.id === id) {
   //          setIsFav(true);
   //       }
   //    });
   // }, [myFavorites]);



   return (
      
      <div className={style.card}>
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
         };
         <button className={style.cardbutton} onClick={() => onClose()}>X</button>
         <Link to={`/detail/${id}`}>
         <h2 className={style.cardName}>{name}</h2>
         </Link>
         
         <h2 className={style.cardSpecie}>{species}</h2>
         <h2 className={style.cardGender}>{gender}</h2>
         <img className={style.imagen}  src={image}/> 
      </div>
   );
   
}
export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}
export function mapDispatchToProps(dispatch){
   return {
      addCharacters: () => dispatch(addCharacter()), 
      removeCharacters: () => dispatch(removeCharacter())
   }
}

connect(mapStateToProps, mapDispatchToProps)(Card)


