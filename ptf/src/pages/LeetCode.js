import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LeetCode.css';
function LeetCode() {
  return (
    <Container>
      <h2>Leet Code</h2>
      <p>Problems with detailed solutions and videos with better approaches.</p>
      <Link to="/leetcode-problems">
        <Button variant="primary">Go to Leet Code Problems</Button>
      </Link>
    </Container>
  );
}

export default LeetCode;
