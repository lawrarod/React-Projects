import './homePage.scss'
import { SearchBar } from '../../Components/Searchbar/SearchBar'


export const HomePage = () => {
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Discover Real Estate & Find Your Dream Home </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis atque sit neque porro aspernatur, provident nisi quasi architecto deleniti facilis.</p>

                    <SearchBar />

                    <div className="boxes">
                        <div className="box">
                            <h1>20+</h1>
                            <h2>Years of Experience</h2>
                        </div>

                        <div className="box">
                            <h1>150</h1>
                            <h2>Awards Gained</h2>
                        </div>

                        <div className="box">
                            <h1>15.000+</h1>
                            <h2>Properties Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/assets/images/bg.png" alt="" />
            </div>
        </div>
    )
}
