import { useLocation } from 'react-router-dom';
import { AppContext } from './context';
import React, { useContext } from 'react';
import '../../css/expandedview.css';
const ExpandedView = (props: any) => {
  const backToHome = () => {
    props.restoreExpandedView();
  }
  return (
    <section >
      <button onClick={backToHome} className="backToHome">Back to Home</button>
      <section className="expanded-container">
        <a href="#preview">
          <img className='detailImg'
            src={`${process.env.PUBLIC_URL}/assets/img/${props.movie[0].poster}`}
            alt="Avatar"
          />
        </a>
        <section className="movie-details">
          <h2>{props.movie[0].title}    ({props.movie[0].year}) </h2>
          <table>
            <tr>
              <td className="detailHeading">Imdb Rating</td>
              <td>{props.movie[0].imdbRating} </td>
            </tr>
            <tr>
              <td className="detailHeading">Content Rating</td>
              <td>{props.movie[0].contentRating} </td>
            </tr>
            <tr>
              <td className="detailHeading">Average Rating</td>
              <td>{props.movie[0].averageRating} </td>
            </tr>
            <tr>
              <td className="detailHeading">Duration</td>
              <td>{props.movie[0].duration} </td>
            </tr>
            <tr>
              <td className="detailHeading">Geners</td>
              <td>{(props.movie[0].genres).toString()} </td>
            </tr>
            <tr>
              <td className="detailHeading">Actor</td>
              <td>{(props.movie[0].actors).toString()} </td>
            </tr>
            <tr>
              <td className="detailHeading">Release Date</td>
              <td>{(props.movie[0].releaseDate)} </td>
            </tr>
            <tr>
              <td className="detailHeading">Story Line</td>
              <td>{(props.movie[0].storyline)} </td>
            </tr>
          </table>
        </section>
      </section>
      <section className="lightbox-target" id="preview">
        <img className='detailImg'
          src={`${process.env.PUBLIC_URL}/assets/img/${props.movie[0].poster}`}
          alt="Avatar"
        />
        <a className="lightbox-close" href="#"></a>
      </section>
    </section>
  );
}

export default ExpandedView;