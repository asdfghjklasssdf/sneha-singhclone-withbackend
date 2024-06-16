import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './LeetCodeVideo.css';
function LeetCodeVideo() {
  const { problemId } = useParams();

  return (
    <Container>
      <h2>Leet Code Problem {problemId}</h2>
      <div>
        <iframe
          width="100%"
          height="400px"
          src={`https://www.youtube.com/embed/dQw4w9WgXcQ?problemId=${problemId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`Leet Code Problem ${problemId}`}
        ></iframe>
        <p>This is a leet code video for problem {problemId}.</p>
      </div>
    </Container>
  );
}

export default LeetCodeVideo;
