import React from "react";
import { Button, Card } from "react-bootstrap";

export const StoreItem = ({ id, price, name, imgUrl }) => {
  const quantity = 10;
  return (
    <Card>
      <Card.Img
        src={imgUrl}
        variant="top"
        style={{
          height: "200px",
          objectFit: "cover",
        }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-2">{name}</span>
          <span className="text-muted me-2">{price}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">Add to cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div className="d-flex align-items-center justify-content-center">
                <Button>-</Button>
                <span className="fs-3">1 in cart</span>
                <Button>+</Button>
              </div>
              <Button variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
