import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LeetCodeProblems.css';
function LeetCodeProblems() {
  return (
    <Container>
      <h2>Leet Code Problems</h2>
      <ListGroup>
        <ListGroup.Item>
          <Link to="/leetcode-video/1">Leet Code Problem 1</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/leetcode-video/2">Leet Code Problem 2</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/leetcode-video/3">Leet Code Problem 3</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/leetcode-video/4">Leet Code Problem 4</Link>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default LeetCodeProblems;
