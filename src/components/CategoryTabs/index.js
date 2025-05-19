import './index.css'

const CategoryTabs = ({categories, active, setActive}) => (
  <div className="tabs">
    {categories.map(cat => (
      <button
        type="button"
        key={cat.menu_category_id}
        className={cat.menu_category === active ? 'active' : ''}
        onClick={() => setActive(cat.menu_category)}
      >
        {cat.menu_category}
      </button>
    ))}
  </div>
)

export default CategoryTabs
