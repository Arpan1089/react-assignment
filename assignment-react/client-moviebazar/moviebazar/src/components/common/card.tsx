import { useEffect, useState } from 'react';
import '../../css/card.css';
import { pushFavDataToServer, removeFromFav } from '../../services/movieDetails';
import AlertToster from './alertToster';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExpandedView from './expandedView';
import { Redirect } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { AppContext } from './context';


const Card = (props: any) => {
    const [successAdded, setsuccessAdded] = useState<boolean>(false);
    const [isExpandedViewOpen, setExpandedView] = useState<boolean>(false);
    const [data, setData] = useState(props.movieData);
    const [errorMessage, setErrorMessage] = useState<any>([]);
    // const history = useHistory();
    useEffect(() => {
        if (props.err && props.err.length > 0) {
            alert(props.err.length);
            setErrorMessage(props.err);
            setsuccessAdded(true);
            setTimeout(() => {
                setErrorMessage(null);
            })
        }
    }, [props.err])

    async function addToFav(data: any) {
        try {
            const res = await pushFavDataToServer(data);
            if (res) {
                let arr = [{ message: 'Added to favourite.', type: 'success' }];
                setErrorMessage([...errorMessage, ...arr]);
                setsuccessAdded(true);
            }
        }
        catch (err: any) {

            let arr = [{ message: ' Already added to favourite.', type: 'error' }];
            setErrorMessage([...errorMessage, ...arr]);
            setsuccessAdded(true);
        }
        setTimeout(() => {
            if (errorMessage.length > 0) {
                setErrorMessage(errorMessage.splice(1, 1));
            }
        }, 1000)



    }
    async function removeFromFavList(data: any) {
        const res = await removeFromFav(data.id);

        if (res) {
            let arr = [{ message: 'Removed from favourite.', type: 'success' }];
            setErrorMessage([...errorMessage, ...arr]);
            props.deleteSucess(res, [...errorMessage, ...arr]);
            setsuccessAdded(true);
        }

    }

    const openExpandedView = () => {
        setExpandedView(true);
        props.expandedViewClickHandler(true, props.movieData);

    }
    return (
        <>

            {!isExpandedViewOpen && <div className="card">

                <img
                    className="img"
                    src={`${process.env.PUBLIC_URL}/assets/img/${props.movieData.poster}`}
                    alt="Avatar"
                    onClick={openExpandedView}

                />

                <div className="container">
                    <p><b>{props.movieData.title}</b></p>
                    {!props.removeButton && <div onClick={() => addToFav(props.movieData)} style={{ marginBottom: "10px" }}>
                        <button style={{ border: "none", background: "none", color: "slategray" }}>Add to favourite</button>
                        <span style={{ color: "red" }}> <i className="fa fa-heart"></i></span>
                    </div>}
                    {props.removeButton && <div onClick={() => removeFromFavList(props.movieData)} style={{ marginBottom: "10px" }}>
                        <button style={{ border: "none", background: "none", color: "slategray" }}>Remove from favourite
                            <span style={{ marginLeft: "2px" }}><i className="fa fa-times-circle-o" aria-hidden="true"></i> </span>
                        </button>

                    </div>}
                </div>
            </div>}
            {successAdded &&
                <div>
                    <AlertToster errorMessage={errorMessage} />


                </div>

            }

        </>
    );
}

export default Card;
