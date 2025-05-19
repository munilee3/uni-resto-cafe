import DishCard from '../DishCard'
import './index.css'

const DishList = ({dishes, cart, onAdd, onRemove}) => (
  <div className="dish-list">
    {dishes.map(dish => (
      <DishCard
        key={dish.dish_id}
        dish={dish}
        count={cart[dish.dish_id] || 0}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    ))}
  </div>
)

export default DishList
