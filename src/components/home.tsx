import fcfm from '../../public/fcfm.jpg'
import '../App.css'

const Home = () => {
    return(
        <div className='mainContainer'>
            <div className='container'>
                <button>850</button>
                <img src={fcfm} className='fcfm'></img>
                <button>851</button>
            </div>
        </div>
    );
};

export default Home;