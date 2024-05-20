import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { patchRequest, deleteReq } from "../../../useCases/Api/api";
function Favourite() {
  const { data } = useSelector((state) => state.api);
  console.log("state", data);
  const dispatch = useDispatch();
  return (
    <div>
      {data?.data?.map(
        (item) =>
          item?.favourite && (
            <Card
              btnText={"Remove"}
              key={item.id}
              name={item.name}
              dec={item.description}
              img={item.file}
              isFav={item.favourite}
              onDelete={() => () => dispatch(deleteReq(item.id))}
              favButton={() => dispatch(patchRequest(item))}
            />
          )
      )}
    </div>
  );
}

export default Favourite;
