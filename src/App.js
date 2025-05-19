// import {Component} from 'react'
// import CategoryTabs from './components/CategoryTabs'
// import DishList from './components/DishList'
// import CartIcon from './components/CartIcon'
// import './App.css'

// const dishesApiUrl =
//   'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       menuData: [],
//       activeCategory: '',
//       restaurantName: 'UNI Resto Cafe',
//       cart: {},
//     }
//   }

//   componentDidMount() {
//     this.fetchRestroDetails()
//   }

//   fetchRestroDetails = async () => {
//     const options = {
//       method: 'GET',
//     }
//     const apiResponse = await fetch(dishesApiUrl, options)
//     const data = await apiResponse.json()

//     // await fetch(dishesApiUrl)
//     //   .then(res => res.json())
//     //   .then(data => {
//     // console.log(data[0].table_menu_list[0].menu_category)
//     this.setState({
//       restaurantName: data[0].restaurant_name,
//       menuData: data[0].table_menu_list,
//       activeCategory: data[0].table_menu_list[0].menu_category,
//     })
//   }

//   handleAdd = dishId => {
//     this.setState(prevState => {
//       const prevCart = prevState.cart
//       const newCount = (prevCart[dishId] || 0) + 1
//       return {
//         cart: {
//           ...prevCart,
//           [dishId]: newCount,
//         },
//       }
//     })
//   }

//   handleRemove = dishId => {
//     this.setState(prevState => {
//       const prevCart = prevState.cart
//       const currentCount = prevCart[dishId] || 0
//       if (currentCount <= 0) return null
//       return {
//         cart: {
//           ...prevCart,
//           [dishId]: currentCount - 1,
//         },
//       }
//     })
//   }

//   setActiveCategory = category => {
//     this.setState({activeCategory: category})
//   }

//   render() {
//     const {restaurantName, menuData, activeCategory, cart} = this.state
//     const cartCount = Object.values(cart).reduce((a, b) => a + b, 0)
//     const activeMenu = menuData.find(
//       menu => menu.menu_category === activeCategory,
//     )

//     return (
//       <div className="app">
//         <header className="header">
//           <h1>{restaurantName}</h1>
//           <p>My Orders</p>
//           <CartIcon count={cartCount} />
//         </header>
//         <CategoryTabs
//           categories={menuData}
//           active={activeCategory}
//           setActive={this.setActiveCategory}
//         />
//         {activeMenu && (
//           <DishList
//             dishes={activeMenu.category_dishes}
//             cart={cart}
//             onAdd={this.handleAdd}
//             onRemove={this.handleRemove}
//           />
//         )}
//       </div>
//     )
//   }
// }

// export default App

import {Component} from 'react'
import CategoryTabs from './components/CategoryTabs'
import DishList from './components/DishList'
import CartIcon from './components/CartIcon'
import './App.css'

const dishesApiUrl =
  'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuData: [],
      activeCategory: '',
      restaurantName: 'UNI Resto Cafe',
      cart: {},
    }
  }

  componentDidMount() {
    this.fetchRestroDetails()
  }

  fetchRestroDetails = async () => {
    const options = {
      method: 'GET',
    }
    const apiResponse = await fetch(dishesApiUrl, options)
    const data = await apiResponse.json()
    this.setState({
      restaurantName: data[0].restaurant_name,
      menuData: data[0].table_menu_list,
      activeCategory: data[0].table_menu_list[0].menu_category,
    })
  }

  handleAdd = dishId => {
    this.setState(prevState => {
      const prevCart = prevState.cart
      const newCount = (prevCart[dishId] || 0) + 1
      return {
        cart: {
          ...prevCart,
          [dishId]: newCount,
        },
      }
    })
  }

  handleRemove = dishId => {
    this.setState(prevState => {
      const prevCart = prevState.cart
      const currentCount = prevCart[dishId] || 0
      if (currentCount <= 0) return null
      return {
        cart: {
          ...prevCart,
          [dishId]: currentCount - 1,
        },
      }
    })
  }

  setActiveCategory = category => {
    this.setState({activeCategory: category})
  }

  render() {
    const {restaurantName, menuData, activeCategory, cart} = this.state
    const cartCount = Object.values(cart).reduce((a, b) => a + b, 0)
    const activeMenu = menuData.find(
      menu => menu.menu_category === activeCategory,
    )

    return (
      <div className="app">
        <header className="header">
          <h1>{restaurantName}</h1>
          <p>My Orders</p>
          <CartIcon count={cartCount} />
        </header>
        <CategoryTabs
          categories={menuData}
          active={activeCategory}
          setActive={this.setActiveCategory}
        />
        {activeMenu && (
          <DishList
            dishes={activeMenu.category_dishes}
            cart={cart}
            onAdd={this.handleAdd}
            onRemove={this.handleRemove}
          />
        )}
      </div>
    )
  }
}

export default App
