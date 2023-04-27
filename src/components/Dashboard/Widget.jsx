import "./Widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import TwitterIcon from '@mui/icons-material/Twitter';
import ReplyIcon from '@mui/icons-material/Reply';

const Widget = ({ type }) => {
    let data;
    const datas = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                icon: (
                    <PersonOutlinedIcon
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;
        case "order":
            data = {
                title: "Post",
                icon: (
                    <FormatAlignLeftIcon
                        className="icon"
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    />
                ),
            };
            break;
        case "earning":
            data = {
                title: "Tweets",
                icon: (
                    <TwitterIcon
                        className="icon"
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                ),
            };
            break;
        case "balance":
            data = {
                title: "Shares",
                icon: (
                    <ReplyIcon
                        className="icon"
                        style={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                        }}
                    />
                ),
            };
            break;
        default:
            break;
    }

    return (
    <div className="widget" >
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
           {datas}
        </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
