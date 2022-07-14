import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Update__cartValue = ({ value }: any, data: any) => {
  console.log(data);

  // const [hold, setHold] = useState(0);

  // const hendelIncrease = () => {
  //   setHold(hold + 1);
  // };
  // const hendelDecrease = () => {
  //   if (hold > 0) {
  //     setHold(hold - 1);
  //   }
  // };
  return (
    <tr>
      <th className="d-flex align-items-center">
        <div className="img__file">
          <img
            className="img-fluid"
            src="/assets/images/products_Small/product-11.png"
            alt=""
          />
          <MdClose className="close__button" />
        </div>

        <p className="pl-15">{value.title}</p>
      </th>
      <th className="text-center">${value.price}</th>
      <th className="text-center">
        <div className="count">
          <button className="minus" onClick={data.hendelDecrease}>
            <FiMinus />
          </button>
          <span>{data.hold}</span>
          <button className="plus" onClick={data.hendelIncrease}>
            <FiPlus />
          </button>
        </div>
      </th>
      <th className="text-center">$40.00</th>
    </tr>
  );
};

export default Update__cartValue;
