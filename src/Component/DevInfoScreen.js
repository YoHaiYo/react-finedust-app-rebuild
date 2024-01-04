import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';

function DevInfoScreen() {
  return (
    <section style={{ display: "flex", justifyContent:"center", alignItems:"center" }}>
      <Card >
          <Card.Title style={{ backgroundColor:'#4a92fe'}}><b>개발 정보</b></Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>실시간으로 미세먼지정보를 지도와 랭킹형태로 보여주는 앱입니다.</ListGroup.Item>
          <ListGroup.Item><b>개발자 : 심세훈</b></ListGroup.Item>
          <ListGroup.Item><b>문의 : 12si47bun@naver.com</b></ListGroup.Item>
          <ListGroup.Item>※초미세먼지가 아닌 미세먼지 데이터만 제공합니다.</ListGroup.Item>
          <ListGroup.Item>※미세먼지지도의 표기값은 각 시도의 모든측정소 평균값입니다.</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="https://www.data.go.kr/data/15073861/openapi.do#tab_layer_detail_function">미세먼지 데이터 출처 : 에어코리아</Card.Link>
          <Card.Link href="https://github.com/YoHaiYo/react-finedust-app-rebuild">깃허브 소스코드</Card.Link>
        </Card.Body>
      </Card>
    </section>
  );
}

export default DevInfoScreen;