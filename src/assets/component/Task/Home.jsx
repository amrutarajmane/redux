import CounterRedux from "../REDUX/CounterReducer";

const Home=()=>{
  return (
    <>
      
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, commodi.</p>

      <h5>
        {/* Replace placeholder text with meaningful content */}
        Welcome to the Home page! Stay tuned for updates and announcements.
      </h5>
      <CounterRedux/>
    </>
  );
};

export default Home;