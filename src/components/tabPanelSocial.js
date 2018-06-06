import React, { Component } from 'react';
import {
        NavItem,
        Tab,
        Tabs,
        TabContainer,
        Row,
        Col,
        Nav
        } from 'react-bootstrap';
import CheckBox from './CheckBox';


class TabPanelSocial extends Component {
  
  render() {
    return (
<div className="container">
 <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
    <Row className="clearfix">
      <Col sm={12}>
        <Nav bsStyle="tabs">
          <NavItem eventKey="first">
              <a data-toggle="tab" href="#facebook" aria-expanded="false">
                  <i className="fa fa-facebook" aria-hidden="true" />
              </a>
          </NavItem>
          <NavItem eventKey="second">
              <a data-toggle="tab" href="#linkedin" aria-expanded="false">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
          </NavItem>
          <NavItem eventKey="third">
              <a data-toggle="tab" href="#instagram" aria-expanded="false">
              <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
          </NavItem>        
          <NavItem eventKey="fourth">
              <a data-toggle="tab" href="#googleplus" aria-expanded="false">
              <i className="fa fa-google-plus" aria-hidden="true"></i>
              </a>
          </NavItem>
          <NavItem eventKey="fifth">
              <a data-toggle="tab" href="#pinterest" aria-expanded="false">
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
              </a>
          </NavItem>        
          <NavItem eventKey="sixth">
              <a data-toggle="tab" href="#vk" aria-expanded="false">
              <i className="fa fa-vk" aria-hidden="true"></i>
              </a>
          </NavItem>
          <NavItem eventKey="seven">
              <a data-toggle="tab" href="#tumbler" aria-expanded="false">
              <i className="fa fa-tumblr" aria-hidden="true"></i>
              </a>
          </NavItem>        
          <NavItem eventKey="eight">
              <a data-toggle="tab" href="#twitter" aria-expanded="false">
              <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
          </NavItem>
          <NavItem eventKey="nine">
              <a data-toggle="tab" href="#xing" aria-expanded="false">
              <i className="fa fa-xing" aria-hidden="true"></i>
              </a>
          </NavItem>        
        </Nav>
      </Col>
      <Col sm={12}>
        <Tab.Content animation>
          <Tab.Pane eventKey="first">
              <CheckBox />
          </Tab.Pane>
              <Tab.Pane eventKey="second"><CheckBox /></Tab.Pane>
              <Tab.Pane eventKey="third"><CheckBox /></Tab.Pane>
              <Tab.Pane eventKey="fourth"><CheckBox /></Tab.Pane>
              <Tab.Pane eventKey="fifth"><CheckBox /></Tab.Pane>
              <Tab.Pane eventKey="sixth"><CheckBox /></Tab.Pane>
              <Tab.Pane eventKey="seven"><CheckBox /></Tab.Pane>        
              <Tab.Pane eventKey="nine"><CheckBox /></Tab.Pane>
              <Tab.Pane eventKey="eight"><CheckBox /></Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
</div>
    );
  }
}


export default TabPanelSocial;

