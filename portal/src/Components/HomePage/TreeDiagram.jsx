import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tree from 'react-d3-tree'; // https://github.com/bkrem/react-d3-tree
import CenteredTree from './CenteredTree';
//import * as d3 from 'd3';

const node = (
    <div style={{ backgroundColor: 'white', width: '6rem', height: '5vh', borderRadius: '15px' }}></div>
);

const treeData = {
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


//  const treemap = d3.tree().size([100, 100]); // Intialize Tree
//  let nodes = d3.hierarchy(treeData, d => d.children); // Intialize Nodes and Assign Data
//  nodes = treemap(nodes) // Populate Tree with Nodes
//  console.log(nodes)

const TreeDiagram = (alignItemsCenter) => {
    return (
        <Container>
            {/* <Tree data={treeData} orientation='vertical' pathFunc='step'/> */}
            <CenteredTree />
            {/* <Row>
                <Col style={alignItemsCenter}>{ nodes }</Col>
            </Row>
            <Row>
                 <Col style={alignItemsCenter}>{ node }</Col>
                 <Col style={alignItemsCenter}>{ node }</Col>
            </Row>
            <Row>
                <Col style={alignItemsCenter}>{ node }</Col>
                <Col style={alignItemsCenter}>{ node }</Col>
                <Col style={alignItemsCenter}>{ node }</Col>
                <Col style={alignItemsCenter}>{ node }</Col>
            </Row> */}
        </Container>
    );
}


export default TreeDiagram;