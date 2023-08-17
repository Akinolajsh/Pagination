import { useEffect, useState } from "react";
import { BsArrow90DegRight, BsArrow90DegLeft } from "react-icons/bs";
// import pix from "../assets/download.jfif";
import { getData } from "../api/getJsonApi";
import ReactPaginate from "react-paginate";

const PaginationScreen = () => {
  const [data, setData] = useState<Array<any>>([]); //get JSON data
  const [view, setView] = useState<number>(12); // 12 card views per page;
  const [page, setPage] = useState<number>(1); // navigate to next page;
  const [state, setState] = useState<Array<any>>([]); //Infinite scrolling;

  const lastPage = page * view;
  const firstPage = lastPage - view;
  const myState = data.slice(firstPage, lastPage); // to see the first 12 cards in a particular view of a page
  const countIt = Math.ceil(data.length / view);

  let pagination: number[] = [];
  // 5000 / 12 (5000 is total number of data objects then 12 is the number of views)
  for (let index = 1; index <= countIt; index++) {
    pagination.push(index);
  }

  useEffect(() => {
    getData().then((res: any) => {
      setData([...data, ...res]);
      //   setState([...data, ...res]); for pagination
      setState([...state, ...myState]); // for Infinite Scroll
    });
  }, [firstPage, lastPage, page]); // Infinite Scroll

  //   console.log(state);

  //Infinite scrolling

  const onHandleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((el) => el + 1);
      console.log("I can scroll");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onHandleScroll);
  }, []);
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full flex-wrap justify-center p-4">
        {state.map((props) => {
          return (
            <div className="w-[300px] min-h-[300px] border-[green] border-[1px] rounded-md overflow-hidden m-2">
              <img src={props.url} className="h-[200px] object-cover w-full" />
              <div className="p-4">
                <p>ID: {props.id} </p>
                <p>Name: {props.title} </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full justify-center mb-3 px-5 flex flex-wrap">
        {/* {pagination?.map((el: any) => (
          <div
            className={`${
              el === page ? "bg-green-400" : "bg-rose-400"
            } py-2 px-5 m-2 rounded-md `}
            onClick={() => {
              setPage(el);
            }}
          >
            {el}
          </div>
        ))} */}

        {/* <ReactPaginate
          pageCount={countIt}
          nextLabel={
            <div>
              <BsArrow90DegRight />
            </div>
          }
          previousLabel={
            <div>
              <BsArrow90DegLeft />
            </div>
          }
          onPageChange={({ selected }) => setPage(selected + 1)}
          pageLabelBuilder={(page) => (
            <div className="bg-red-500 px-5 py-2 rounded">{page}</div>
          )}
          className="flex w-full justify-between"
          breakLabel="..."
        /> */}
      </div>
    </div>
  );
};

export default PaginationScreen;
