import React from 'react'
import { Col, Row } from 'react-bootstrap'
import storeitems from "../data/storeitems.json"
import StoreItem from './StoreItem';
export const Store = (item) => {
  return <>
  <h1>store</h1>
  <Row md={2} xs={1} lg={3} className="g-3">
{storeitems.map((item)=>(
    <Col key={item.id}>
        <StoreItem {...item} />
    </Col>
))}
  </Row>
  </>
}
