import Axios from "axios";

const CoinList = ({ coinData }) => {
  return (
    <div>
      {coinData.coins.map((coin) => {
        return (
          <div>
            <h1> {coin.name}</h1>
            <img src={coin.icon} />
            <p> {coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};
//coinData is an obj with 1 key coins
//see in inspect mode for more clarity or see in thunderClient


//this func it used to fetch data
//it has to be named getStaticProps
export const getStaticProps = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
    revalidate: 10,//regenrates the page every 10 sec
  };
};

export default CoinList;


//FOR SERVER SIDE RENDERING->to render the data at req time
//if the data in an API keeps changing 
export const getServerSideProps = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
    revalidate: 10,
  };
};




