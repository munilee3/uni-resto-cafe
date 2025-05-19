import './index.css'

const DishCard = ({dish, count, onAdd, onRemove}) => (
  <div className="dish-card">
    <div className="dish-info">
      <h3>{dish.dish_name}</h3>
      <p>
        {dish.dish_currency} {dish.dish_price}
      </p>
      <p>{dish.dish_description}</p>
      <p>{dish.dish_calories} calories</p>
      {dish.addonCat?.length > 0 && (
        <p className="customizations">Customizations available</p>
      )}
      {!dish.dish_Availability && (
        <p className="not-available">Not available</p>
      )}
    </div>
    <img src={dish.dish_image} alt={dish.dish_name} className="dish-image" />
    {dish.dish_Availability && (
      <div className="quantity-control">
        <button type="button" onClick={() => onRemove(dish.dish_id)}>
          -
        </button>
        <span>{count}</span>
        <button type="button" onClick={() => onAdd(dish.dish_id)}>
          +
        </button>
      </div>
    )}
  </div>
)

export default DishCard
