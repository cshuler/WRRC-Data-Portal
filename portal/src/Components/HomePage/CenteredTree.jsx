import React from "react";
import Tree from "react-d3-tree";

const data = {
  "name": "AS - 565",
  "children": [
    {
        "name": "Reports - 86",
    },
    {
        "name": "Publications - 276",
    },
    {
      "name": "Datasets - 32",
    },
  ]
};

const containerStyles = {
  width: '100%',
  height: '100%',
  marginBottom: '40vh',
  position: 'relative'
}

export default class CenteredTree extends React.PureComponent {
  state = {}

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 2
      }
    });
  }

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree 
          data={data} 
          translate={this.state.translate} 
          orientation={'vertical'}
          zoomable={false}
          pathFunc='step'
          nodeSvgShape={{shape: 'rect', shapeProps: {
            width: 170,
            height: 20,
            x: -80,
            y: -20,
          }}}
          textLayout={{textAnchor: "middle", x: -10, y: -10, transform: undefined }}
          nodeSize={{x: 200, y:100}}
        />
      </div>
    );
  }
}
