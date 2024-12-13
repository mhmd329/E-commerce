import React from "react";
import { Button, Stack } from "react-bootstrap";
import storeItems from "../data/storeitems.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
const CartItem = ({ id, quantity }) => {
    const {removeItemFromCart} = useShoppingCart()
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" className="d-flex align-items-center" gap={2}>
      <img
        src={item.imgUrl}
        alt="img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.5rem" }}>
              x{quantity}
            </span>
          )}
          <div className="text-muted" style={{ fontSize: "0.75rem" }}>
            $ {item.price}
          </div>
        </div>

      
      </div> 
       <div>$ {item.price * quantity}</div>
      <Button variant="outline-danger" size="sm" onClick={()=>removeItemFromCart(id )}>
      x
         </Button>
    </Stack>
  );
};
export default CartItem;
