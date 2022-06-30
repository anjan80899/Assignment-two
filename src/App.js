import "./styles.css";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import FetchAPI from "./fetchApi.js";
import DisplayData from "./displayData";

export default function App() {
  let userId = "";
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { refetch, data, isSuccess, status } = useQuery(
    ["getUser", userId],
    () => FetchAPI(userId),
    { enabled: false },
    { placeholderData: "Loading" }
  );
  function OnSubmit(user) {
    userId = user.nameRequired;

    refetch()
      .then(() => {
        console.log(status);
        console.log(data);
      })
      .catch(() => console.log("error"));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(OnSubmit)}>
        <div className="searchBar">
          <input {...register("nameRequired", { required: true })} />
          {errors.nameRequired && <p>feild is required</p>}
        </div>
        <input type="submit" />
      </form>
      <div>{isSuccess && <DisplayData data={data} />}</div>
    </div>
  );
}
