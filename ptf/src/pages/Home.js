import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

import announcementImage from '../image/announcement.png';
import leetCodeImage from '../image/leetcode.png';
import webDevImage from '../image/webdev.png';
import goLangImage from '../image/golang.png';
import bonusImage from '../image/bonus.png';

function Home() {
  return (
    <Container>
      <h2>Hi Learner! 👋</h2>
      <p>Today is a good day to start learning.</p>
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body className="d-flex align-items-center">
              <img src={announcementImage} alt="Announcements" className="card-image" />
              <div className="ml-3">
                <Card.Title>Announcements</Card.Title>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body className="d-flex align-items-center">
              <img src={leetCodeImage} alt="Leet Code" className="card-image" />
              <div className="ml-3">
                <Card.Title>Leet Code</Card.Title>
                <Link to="/leetcode">Go to Leet Code</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body className="d-flex align-items-center">
              <img src={webDevImage} alt="Web Dev" className="card-image" />
              <div className="ml-3">
                <Card.Title>Web Dev</Card.Title>
                <Link to="/leetcode">Go to Web Dev</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body className="d-flex align-items-center">
              <img src={goLangImage} alt="Go Lang" className="card-image" />
              <div className="ml-3">
                <Card.Title>Go Lang</Card.Title>
                <Link to="/leetcode">Go to Go Lang</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body className="d-flex align-items-center">
              <img src={bonusImage} alt="Bonus" className="card-image" />
              <div className="ml-3">
                <Card.Title>Bonus</Card.Title>
                <Link to="/leetcode">Go to Bonus</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
