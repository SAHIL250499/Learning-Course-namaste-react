import { CDN_URL } from "../utils/constants";
const MenuItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div className="flex justify-between ">
            <div className="py-2 w-9/12">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs py-4 pr-10">{item.card.info.description}</p>
            </div>

            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="p-2 my-16 bg-black text-white shadow-lg">
                  Add +
                </button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
