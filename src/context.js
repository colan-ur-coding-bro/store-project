import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    store: [],
    detail: detailProduct,
    cart: [],
    isModalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProduct();
  }
  setProduct = () => {
    let tempProduct = [];
    if (localStorage.getItem("store")) {
      tempProduct = JSON.parse(localStorage.getItem("store"));
      this.setState(() => {
        return { store: tempProduct };
      });

      this.setState({ cart: JSON.parse(localStorage.getItem("cart")) });
      window.addEventListener("load", () => {
        this.addTotal();
      });
      return;
    }

    storeProducts.forEach((item) => {
      const singleProduct = { ...item };
      tempProduct = [...tempProduct, singleProduct];
    });
    this.setState(() => {
      return { store: tempProduct };
    });
  };
  getItem = (id) => {
    const product = this.state.store.find((item) => {
      return item.id === id;
    });
    return product;
  };
  getCartItem = (id) => {
    const product = this.state.cart.find((item) => {
      return item.id === id;
    });
    return product;
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detail: product };
    });
  };
  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => {
      return (subTotal += item.total * item.count);
    });
    const temptax = subTotal * 0.1;
    const tax = parseFloat(temptax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return { cartSubTotal: subTotal, cartTax: tax, cartTotal: total };
    });
  };
  addToCart = (id) => {
    const item = this.getItem(id);
    const pro = [...this.state.store];
    const index = pro.indexOf(item);
    const tempPro = pro[index];
    tempPro.inCart = true;
    tempPro.count = 1;
    tempPro.total = tempPro.price;
    this.setState(
      () => {
        return { store: pro, cart: [...this.state.cart, tempPro] };
      },
      () => {
        this.addTotal();
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
        localStorage.setItem("store", JSON.stringify(this.state.store));
      }
    );
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, isModalOpen: true };
    });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  increment = (id) => {
    const newCart = this.state.cart.map((item) => {
      if (item.id === id) {
        item.count++;
        item.total = item.price * item.count;
      }
      return item;
    });
    this.setState(
      () => {
        return { cart: [...newCart] };
      },
      () => {
        this.addTotal();
        localStorage.removeItem("cart");
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
      }
    );
  };
  decrement = (id) => {
    const newCart = [...this.state.cart];
    const product = newCart.find((item) => {
      return item.id === id;
    });
    const index = newCart.indexOf(product);
    const obj = newCart[index];
    obj.count--;
    obj.total = obj.price * obj.count;
    if (obj.count === 0) {
      this.removeItem(id);
    } else {
      this.setState(
        () => {
          return { cart: [...newCart] };
        },
        () => {
          this.addTotal();
          localStorage.removeItem("cart");
          localStorage.setItem("cart", JSON.stringify(this.state.cart));
        }
      );
    }
  };
  removeItem = (id) => {
    localStorage.removeItem("store");
    localStorage.removeItem("cart");
    const newCart = this.state.cart.filter((item) => {
      return item.id !== id;
    });
    const newStore = this.state.store.map((item) => {
      if (item.id === id) {
        item.inCart = false;
      }
      return item;
    });
    this.setState(
      () => {
        return { cart: [...newCart], store: [...newStore] };
      },
      () => {
        localStorage.setItem("store", JSON.stringify(this.state.store));
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
        this.addTotal();
      }
    );
  };

  clearCart = (id) => {
    console.log("cart was cleared");
    localStorage.removeItem("store");
    localStorage.removeItem("cart");
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProduct();
        this.addTotal();
      }
    );
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
