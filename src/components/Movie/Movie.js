import styled from "styled-components";

const StyleMovie = styled.div`
  margin-bottom: 1rem;

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  h3 {
    color: #4361ee;
    font-size: 1.93rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: #4361ee;
  }

  @media (min-width: 768px) {
    & {
      flex-basis: 50%;
    }
  }

  @media (min-width: 992px) {
    & {
      flex-basis: 25%;
      padding: 1rem;
    }
  }
`;

function Movie(props) {
  const { movie } = props;
  return (
    <StyleMovie>
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.type}</p>
      <p>{movie.year}</p>
    </StyleMovie>
  );
}

export default Movie;
