import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';

export default function DevInfo() {
  return (
    <section>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>앱 개발 정보</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
           <strong>버전:</strong> 2.0
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>개발자:</strong> YoHaYo
          </ListGroup.Item>
          <ListGroup.Item>
          <strong>미세먼지 데이터 출처 : </strong>
            <a
                href="https://www.data.go.kr/data/15073861/openapi.do#tab_layer_detail_function"
                target="_blank"
                rel="noopener noreferrer"
              >
                에어코리아 대기오염정보 API
              </a></ListGroup.Item>
          <ListGroup.Item>※ 초미세먼지가 아닌 미세먼지 데이터만 제공합니다</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary" href="https://github.com/YoHaiYo/react-finedust-app-rebuild" target="_blank" rel="noopener noreferrer">
            소스코드 보기
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
}
