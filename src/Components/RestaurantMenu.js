import React from "react";
import { addItem } from "./Utils/CartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <div className="bg-gray-500 h-36">
        <h1 className="font-mono pt-11 text-white text-2xl text-center">
          FEEL THE TASTE OF FOOD
        </h1>
        <h1 className="font-bold text-center text-lg text-white">
          THANKYOU FOR VISITING OUR WEBSITE
        </h1>
      </div>
      <div className=" ml-28 mt-10">
        <div className="flex">
          <div>
            <img
              className="rounded-2xl"
              src="https://caamedia.org/wp-content/uploads/sites/3/2015/11/Hong_Thaimee-386x580.jpg?x97728"
              alt=""
            />
          </div>
          <div className="ml-5">
            <div>
              <h1 className="font-bold">
                Order online for DoorDash super-fast delivery or pick-up.
              </h1>
            </div>
            <div>
              <h1 className="font-bold">TODAYS SPEICALS</h1>
              <h4>Alphonso Mango Milkshake</h4>
              <p>
                Soft, smooth and slurpy milkshake made from mango falvoured ice
                cream.
              </p>
              <button
                onClick={() => addFoodItem()}
                className="bg-green-400 hover:bg-green-600 h-8 w-20 text-white rounded-lg"
              >
                Add +
              </button>
              <h4>Nutella Mud Milkshake(Ice Cream)</h4>
              <p>
                Nutella milk shake topped with cream,spanish delight ice
                cream,choco chips,nuts,etc..
              </p>
              <button
                onClick={() => addFoodItem()}
                className="bg-blue-500 h-8 w-20 text-white rounded-lg"
              >
                Add +
              </button>
            </div>
            <div>
              <h1 className="font-bold"> JUICES AND SHAKES</h1>
              <h4>Tender Cocounut Milk Shake</h4>
              <button className="bg-blue-500 h-8 w-20 text-white rounded-lg">
                Add +
              </button>
              <h4>Mississippi Mud</h4>
              <p className="text-sm">
                A refreshing milkshake prepared with chocolate, mississippi mud
                icecreme and wholesome milk - perfect to satisfy your cravings.
              </p>
              <button className="bg-blue-500 h-8 w-20 text-white rounded-lg">
                Add +
              </button>
            </div>
            <div>
              <h1 className="font-bold">RECOMMENDED</h1>
              <h4>The Cheese Dominator</h4>
              <p className="text-sm">
                Loaded with 1 Pound of Mozzarella and gooey Liquid Cheese on a{" "}
                <br />
                Classic Large Pizza topped with a generous helping of herb
                sprinkle
              </p>
              <button className="bg-blue-500 h-8 w-20 text-white rounded-lg">
                Add +
              </button>
              <h4>Creamy Tomato Pasta Pizza - Veg</h4>
              <p className="text-sm">
                Loaded with a delicious creamy tomato pasta topping , green{" "}
                <br />
                capsicum, crunchy red and yellow bell peppers and black olives
              </p>
              <button className="bg-blue-500 h-8 w-20 text-white rounded-lg">
                Add +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
