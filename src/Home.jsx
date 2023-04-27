import Sidebars from "./components/sicebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import "./Home.css";
import Widget from "./components/Dashboard/Widget";
import Featured from "./components/Dashboard/Featured";
import Chart from "./components/Dashboard/MainDashboard";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className={"mainWrapper"}>
                <Sidebars />
                <main>
                    <div className="homeContainer">
                        <div className="widgets">
                            <Widget type="user" />
                            <Widget type="order" />
                            <Widget type="earning" />
                            <Widget type="balance" />
                        </div>
                        <div className="charts">
                            <Featured />
                            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;