
import "./Navbar.css";
import Avatar from '@mui/material/Avatar';
import { BiCaretDown } from "react-icons/bi";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { BiSearchAlt2 } from "react-icons/bi";
import { Layout} from 'antd';
import 'antd/dist/reset.css';

const { Header} = Layout;


const Navbar = () => {
    const onSearch = (e) => {
      console.log(e.target.value)
    }
    return (
        // <Layout>
            <Header
                className="headarDiv"
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    verticalAlign: 'center',
                    alignItems: "center"
                }}
            >
                <div
                    style={{
                        height: 40,
                        width:120,
                        background:"white"
                    }}
                >
                    <a href="https://cybersrcc.com/">
                    <img src="905f0312d3b83d93ecdc00afdb21f452 (1).png" alt="img" width="90px" />
                        </a>
                </div>

                <div className="navMainDiv">
                    <ul className="navItem">
                        <div className="inputDiv">
                            <input
                                className="seachbar"
                                placeholder="search "
                                type="text"
                                onChange={onSearch}
                            />
                            <BiSearchAlt2 style={{color:"black"}}/>
                        </div>
                        <div className="navlistItem">
                            <li style={{display:"flex",
                                alignItems: "center",
                                gap: "15px"}}>
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                <p>kanchan <BiCaretDown/></p>
                            </li>
                            <Badge badgeContent={4} color="primary">
                                <MailIcon color="white" />
                            </Badge>
                            <NotificationsIcon/>
                        </div>
                    </ul>
                </div>
            </Header>
        // </Layout>
    );
};
export default Navbar;