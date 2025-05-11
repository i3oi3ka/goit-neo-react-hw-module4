import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button className={style.button} type="button" onClick={handleLoadMore}>
      Load more...
    </button>
  );
};

export default LoadMoreBtn;
