import { HeartFilled, HeartOutlined } from "@ant-design/icons";

function Card({ name, dec, img, favButton, onDelete, btnText, isFav }) {
  return (
    <div className="bg- w-60 h-auto m-4 shadow-md inline-block gap-4  ">
      <div
        className="flex flex-col items-center break-words "
        style={{ fontFamily: "Roboto" }}
      >
        <div className="w-56 h-72">
          <img src={img} alt="" />
        </div>
        <h1>Name: {name}</h1>
        <h1 className="ml-2 overflow-auto">{dec}</h1>
        <div>
          <button
            onClick={onDelete}
            className="bg-red-500 m-4 p-4 text-white rounded-xl"
          >
            {btnText}
          </button>
          <button className=" m-4 p-3  rounded-xl" onClick={favButton}>
            {isFav ? (
              <HeartFilled className="text-3xl text-blue-800" />
            ) : (
              <HeartOutlined className="text-3xl text-blue-800" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
