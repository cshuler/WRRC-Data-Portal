import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tree from 'react-d3-tree'; // https://github.com/bkrem/react-d3-tree

import CenteredTree from '../HomePage/CenteredTree';



const debugData = {
    "name": "Eve",
    "children": [
       {
          "name": "Cain"
       },
       {
          "name": "Seth",
          "children": [
             {
                "name": "Enos"
             },
             {
                "name": "Noam"
             }
          ]
       },
       {
          "name": "Abel"
       },
       {
          "name": "Awan",
          "children": [
             {
                "name": "Enoch"
             }
          ]
       },
       {
         "name": "Azura"
       }
    ]
 };

const InteractiveTree = () => {
    return (
        <Container>
            <Row>
                <Col>
                  {/* <Tree data={debugData}  orientation='vertical' zoomable={false}/> */}
                  <CenteredTree />
                </Col>

            </Row>
        </Container>
    )

};

export default InteractiveTree;