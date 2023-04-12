import React ,{useState} from "react";
import { NavLink, Redirect } from "react-router-dom";
import {
    Collapse,Container,
    Navbar,List,Row,Col,
    NavbarToggler,
    NavbarBrand,
    Text,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,CardImg,
    DropdownItem,Card,CardBody,CardTitle,CardSubtitle,CardText,CardLink,CardGroup
  } from "reactstrap";
  import { Link } from "react-router-dom";
  import Product from "./projects/Product";
  import {Button} from "react-bootstrap";
import ProductCardstable from "./projects/ProductCardstable";
import Products from "./projects/Products";

import { useHistory } from "react-router-dom";

const MainPage = () => {
  const history = useHistory();
  
  // const [pickedCategory, setPickedCategory] = useState([]);
  const selectCategory = (e, props, state) => {
  
  console.log('Category selected = ',e.target.value)
  props=e.target.value
  console.log('PROPS Category selected = ',props)
  
  history.push('/products/'+props);
  // this.setState({
  //   pickedCategory: ''
  // });
  
};
  
  
  return (
    <>
    <Container>
      {/* <ul className="right">
             <li>
                <NavLink to="/">PRODUCTS</NavLink>
            </li>
            <li>
                <NavLink to="/signup">SIGN UP</NavLink>
            </li>
            <li>
                <NavLink to="/signin">LOGIN</NavLink>
            </li>
            <li>
                <NavLink to="/"> Projects</NavLink>
            </li>
           
        </ul> */}

      <Row>
        <Col sm="6">
          <Card body>
            <Row>
              <Col className=" bordered" xs="8">
                <CardTitle tag="h5">
                  <Button value="dbruki" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black'}}>Брюки</Button>
                </CardTitle>
                <CardText>
                  <ul>
                    <li>
                    
                    <Button value="dbruki" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Палаццо</Button>
                    

                    
                    </li>
                    <li>
                    <Button value="dbruki" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                        Спорт брюки
                        </Button>    </li>
                    <li>
                    <Button value="dbruki" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                        Трико
                        </Button></li>
                    {/* <li>Клеш</li> */}
                    {/* <li>Карго</li>
                    <li>Джинсы</li>
                    <li>Джогерры</li>
                    <li>Брюки школьные</li>
                    <li>Слоуги</li> */}
                  </ul>
                </CardText>
                {/* <Link>Все 9 категорий</Link> */}


              </Col>
              <Col className=" bordered " xs="4">
                <CardImg
                  alt="img-fluid rounded-start"
                  src="https://static.detmir.st/media_pim/03FemOYaRJpeZIhHry9Oq8KmjutgB8QWfOF9TJv3Fgo=.jpg"
                  width="80%"
                />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col sm="6">
          <Card body>
            <Row>
              <Col className="bg-light bordered" xs="8">
                <CardTitle tag="h5">
                <Button value="drubashki"  onClick={selectCategory} variant="link" style={{'display':'contents','color':'black'}}>Рубашки</Button>
                  
                </CardTitle>
                <CardText>
                  <ul>
                    <li>
                    <Button value="drubashki" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Блузки</Button>
                      
                    </li>
                    <li>
                      
                      <Button value="drubashki" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                      Школьные блузки</Button>
                    </li>
                    <li>
                    <Button value="drubashki" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Нарядные блузки</Button>
                    </li>
                    <li>
                    <Button value="drubashki" onClick={selectCategory}variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Клеш</Button>
                    </li>
                    {/* <li>Карго</li>
                    <li>Джинсы</li>
                    <li>Джогерры</li>
                    <li>Брюки школьные</li>
                    <li>Слоуги</li> */}
                  </ul>
                </CardText>
                <Link>Все 5 категорий</Link>
              </Col>
              <Col className="bg-light bordered " xs="4">
                <CardImg
                  alt="img-fluid rounded-start"
                  src="https://static.detmir.st/media_pim/03FemOYaRJpeZIhHry9Oq8KmjutgB8QWfOF9TJv3Fgo=.jpg"
                  width="80%"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <Card body>
            <Row>
              <Col className="bg-light bordered" xs="8">
                <CardTitle tag="h5">
                <Button value="dkofty" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black'}}>Кофты</Button>
                  
                  
                </CardTitle>
                <CardText>
                  <ul>
                    <li>
                    <Button value="dkofty" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Лонгсливы</Button>
                    </li>
                    <li>
                    <Button value="dkofty" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Бомберы</Button>
                    </li>
                    <li>
                    <Button value="dkofty" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Худи</Button>
                    </li>
                    <li>
                    <Button value="dkofty" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Свитшоты</Button>
                    </li>
                    {/* <li>Карго</li>
                    <li>Джинсы</li>
                    <li>Джогерры</li>
                    <li>Брюки школьные</li>
                    <li>Слоуги</li> */}
                  </ul>
                </CardText>
                <Link>Все 9 категорий</Link>
              </Col>
              <Col className="bg-light bordered " xs="4">
                <CardImg
                  alt="img-fluid rounded-start"
                  src="https://static.detmir.st/media_pim/03FemOYaRJpeZIhHry9Oq8KmjutgB8QWfOF9TJv3Fgo=.jpg"
                  width="80%"
                />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col sm="6">
          <Card body>
            <Row>
              <Col className="bg-light bordered" xs="8">
                <CardTitle tag="h5">
                <Button value="dplatya" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black'}}>Платья</Button>
                
                </CardTitle>
                <CardText>
                  <ul>
                    <li>
                    <Button value="dplatya" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Сарафаны</Button>
                    </li>
                    {/* <li>Школьные блузки</li>
                    <li>Нарядные блузки</li>
                    <li>Клеш</li> */}
                    {/* <li>Карго</li>
                    <li>Джинсы</li>
                    <li>Джогерры</li>
                    <li>Брюки школьные</li>
                    <li>Слоуги</li> */}
                  </ul>
                </CardText>
                <Link>Все 5 категорий</Link>
              </Col>
              <Col className="bg-light bordered " xs="4">
                <CardImg
                  alt="img-fluid rounded-start"
                  src="https://static.detmir.st/media_pim/03FemOYaRJpeZIhHry9Oq8KmjutgB8QWfOF9TJv3Fgo=.jpg"
                  width="80%"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <Card body>
            <Row>
              <Col className="bg-light bordered" xs="8">
                <CardTitle tag="h5">
                <Button value="dfootbolki" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black'}}>Футболки</Button>
               
                </CardTitle>
                <CardText>
                  <ul>
                    <li>
                    <Button value="dfootbolki" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Майки</Button>
                    </li>
                    <li>
                    <Button value="dfootbolki" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Тенниски</Button>
                    </li>
                    {/* <li>Трико</li>
                    <li>Клеш</li> */}
                    {/* <li>Карго</li>
                    <li>Джинсы</li>
                    <li>Джогерры</li>
                    <li>Брюки школьные</li>
                    <li>Слоуги</li> */}
                  </ul>
                </CardText>
                <Link>Все 9 категорий</Link>
              </Col>
              <Col className="bg-light bordered " xs="4">
                <CardImg
                  alt="img-fluid rounded-start"
                  src="https://static.detmir.st/media_pim/03FemOYaRJpeZIhHry9Oq8KmjutgB8QWfOF9TJv3Fgo=.jpg"
                  width="80%"
                />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col sm="6">
          <Card body>
            <Row>
              <Col className="bg-light bordered" xs="8">
                <CardTitle tag="h5">
                <Button value="dsportkostymy" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black'}}>Спортивные костюмы</Button>
               
                </CardTitle>
                <CardText>
                  <ul>
                    <li>
                    <Button value="dsportkostymy" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Трико</Button>
                    </li>
                    {/* <li>Школьные блузки</li>
                    <li>Нарядные блузки</li>
                    <li>Клеш</li> */}
                    {/* <li>Карго</li>
                    <li>Джинсы</li>
                    <li>Джогерры</li>
                    <li>Брюки школьные</li>
                    <li>Слоуги</li> */}
                  </ul>
                </CardText>
                <Link>Все 5 категорий</Link>
              </Col>
              <Col className="bg-light bordered " xs="4">
                <CardImg
                  alt="img-fluid rounded-start"
                  src="https://static.detmir.st/media_pim/03FemOYaRJpeZIhHry9Oq8KmjutgB8QWfOF9TJv3Fgo=.jpg"
                  width="80%"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <Card body>
            <Row>
              <Col className="bg-light bordered" xs="8">
                <CardTitle tag="h5">
                <Button value="daccessories" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black'}}>Аксессуары</Button>
               </CardTitle>
                <CardText>
                  <ul>
                    <li>
                    <Button value="daccessories" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Шапки</Button>
                    </li>
                    <li>
                    <Button value="daccessories" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Рюкзаки</Button>
                    </li>
                    <li>
                    <Button value="daccessories" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Шарфы</Button>
                    </li>
                    <li>
                    <Button value="daccessories" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Панамы</Button>
                    </li>
                    <li>
                    <Button value="daccessories" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Бейсболки</Button>
                    </li>
                    {/* <li>Карго</li>
                    <li>Джинсы</li>
                    <li>Джогерры</li>
                    <li>Брюки школьные</li>
                    <li>Слоуги</li> */}
                  </ul>
                </CardText>
                <Link>Все 9 категорий</Link>
              </Col>
              <Col className="bg-light bordered " xs="4">
                <CardImg
                  alt="img-fluid rounded-start"
                  src="https://static.detmir.st/media_pim/03FemOYaRJpeZIhHry9Oq8KmjutgB8QWfOF9TJv3Fgo=.jpg"
                  width="80%"
                />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col sm="6">
          <Card body>
            <Row>
              <Col className="bg-light bordered" xs="8">
                <CardTitle tag="h5">
                <Button value="dkurtki" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black'}}>Куртки</Button></CardTitle>
                <CardText>
                  <ul>
                    <li>
                    <Button value="dkurtki" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Джинсовые куртки</Button>
                    </li>
                    <li>
                    <Button value="dkurtki" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Пуховики</Button>
                    </li>

                    {/* <li>Карго</li>
                    <li>Джинсы</li>
                    <li>Джогерры</li>
                    <li>Брюки школьные</li>
                    <li>Слоуги</li> */}
                  </ul>
                </CardText>
                <Link>Все 5 категорий</Link>
              </Col>
              <Col className="bg-light bordered " xs="4">
                <CardImg
                  alt="img-fluid rounded-start"
                  src="https://static.detmir.st/media_pim/03FemOYaRJpeZIhHry9Oq8KmjutgB8QWfOF9TJv3Fgo=.jpg"
                  width="80%"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <Card body>
            <Row>
              <Col className="bg-light bordered" xs="8">
                <CardTitle tag="h5">
                <Button value="dshorty" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black'}}>Шорты</Button></CardTitle>
                <CardText>
                  <ul>
                    <li>
                    <Button value="dshorty" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Джинсовые шорты</Button>
                    </li>
                    {/* <li>Спорт брюки</li>
                    <li>Трико</li>
                    <li>Клеш</li> */}
                    {/* <li>Карго</li>
                    <li>Джинсы</li>
                    <li>Джогерры</li>
                    <li>Брюки школьные</li>
                    <li>Слоуги</li> */}
                  </ul>
                </CardText>
                <Link>Все 9 категорий</Link>
              </Col>
              <Col className="bg-light bordered " xs="4">
                <CardImg
                  alt="img-fluid rounded-start"
                  src="https://static.detmir.st/media_pim/03FemOYaRJpeZIhHry9Oq8KmjutgB8QWfOF9TJv3Fgo=.jpg"
                  width="80%"
                />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col sm="6">
          <Card body>
            <Row>
              <Col className="bordered" xs="8">
                <CardTitle tag="h5">
                <Button value="diubki" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black'}}>Юбки</Button></CardTitle>
                <CardText>
                  <ul>
                    <li style={{'list-style-type': 'initial'}}>
                    <Button value="diubki" onClick={selectCategory} variant="link" style={{'display':'contents','color':'black','text-transform': 'none'}}>
                    Джинсовые юбки</Button>
                    </li>
                    {/* <li>Школьные блузки</li>
                    <li>Нарядные блузки</li>
                    <li>Клеш</li> */}
                    {/* <li>Карго</li>
                    <li>Джинсы</li>
                    <li>Джогерры</li>
                    <li>Брюки школьные</li>
                    <li>Слоуги</li> */}
                  </ul>
                </CardText>
                {/* <Link>Все 5 категорий</Link> */}
              </Col>
              <Col className=" bordered " xs="4">
                <CardImg
                  alt="img-fluid rounded-start"
                  src="https://static.detmir.st/media_pim/03FemOYaRJpeZIhHry9Oq8KmjutgB8QWfOF9TJv3Fgo=.jpg"
                  width="80%"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      </Container>
    </>
  );
};

export default MainPage;
