import { React, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import Jumbotron from '../Components/HomePage/Jumbotron';
import Navbar from '../Components/Navbar';
import Plate from '../Components/Plate';
import Searchbar from '../Components/Searchbar';
import Slideshow from '../Components/Slideshow';
import Footer from '../Components/Footer';

import GraphDiagram from '../Components/HomePage/GraphDiagram';
import TreeDiagram from '../Components/HomePage/TreeDiagram';

import Tree from '../Components/Interactives/InteractiveTree';

// Tree Contents
const treeText = (
        <p style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
);

// Graph Contents
const graphText = (
    <p style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
);


const alignItemsCenter = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}




const HomePage = () => {

    // EXPERIMETNAL 
    useEffect(() => {
        const script_a = document.createElement('script');
    
        script_a.src = '../Styles/Animations/sketch.js';
        script_a.type = 'text/jsx';
        script_a.async = true;
        document.body.appendChild(script_a);
    
        const script_b = document.createElement('script');
    
        script_b.src = '../Styles/Animations/app.js';
        script_b.type = 'text/jsx';
        script_b.async = true;
        document.body.appendChild(script_b);
    
        return () => { document.body.removeChild(script_a); document.body.removeChild(script_b)}
    }, [])
    
    const treeDiagram = TreeDiagram(alignItemsCenter); // Intialize Component in order to pass down as prop
    
    return (
        <Container id='root' fluid> 
            <Navbar />
            <Jumbotron />
            <Searchbar />
            <Slideshow />
            <Plate orientation='bottom' left={treeDiagram} right={treeText} style={alignItemsCenter} header='Interactive Tree Diagram'/>
            <Tree />
            <Plate orientation='neutral' left={graphText} header='Interactive Keyword Graph' />
            <Footer />
        </Container>
    );
};

export default HomePage;