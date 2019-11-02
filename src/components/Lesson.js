import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Video from "./Video";

export default class Lesson extends Component {
  render() {
    const { content, title, video } = this.props;

    return (
      <Row>
        <Col>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <span dangerouslySetInnerHTML={{ __html: title }} />
                  </Card.Title>
                  <Card.Text>
                    <span dangerouslySetInnerHTML={{ __html: content }} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Video video={video} />
        </Col>
      </Row>
    );
  }
}
