import React,{ Component,useState } from 'react';
// import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'; 
// import Select from './Select';
// import Select from "react-select";
import CustomSelect from './Select'
// import { Category } from '@material-ui/icons';
import {createProductAction} from '..//../store/actions/productActions';
import{Container,Row,Col} from 'reactstrap'
import { storage } from '../../config/fbConfig';

const options = [
   
  { value: 'dplatya',  label: 'Платья'},
  { value: 'dbruki',  label: 'Брюки'},
  { value: 'drubashki',   label: 'Рубашки'},
  { value: 'dkofty',   label: 'Кофты'},
  { value: 'daccessories',   label: 'Аксессуары'},
  { value: 'dfootbolki', label: 'Футболки'},
  { value: 'dkurtki',   label: 'Куртки'},
  { value: 'diubki',   label: 'Юбки'},
  { value: 'dshorty', label: 'Шорты'},
  { value: 'dsportkostymy',   label: 'Спортивные костюмы'},
]


const sex = [
   
  { value: 'male',  label: 'Мальчик'},
  { value: 'female',  label: 'Девочка'},
 
]

const sizes=[
  
  {value:80,label: '80'},
  {value:90 ,  label: '90'},
  {value:100,  label: '100'},
  {value:110,  label: '110'},
  {value:120,  label: '120'},
  {value:130,  label: '130'},
  {value:140,  label: '140'},
  {value:150,  label: '150'}, 
  {value:160,  label: '160'},
  {value:170,  label: '170'},

  ]
class CreateProject extends Component {
    state = {
        selectOptions: [],
        selectSexOptions: [],
        cartItems:[],
        title: '',      
        Category:'',
        Region:'',
        Manufacturer:'',
        Brand:'',
        Fortress:'',
        Colour:'',
        Sugar:'',
        Grape:'',
        Serving_temperature:'',
        Vintage:'',
        Products_webpage:'',
        content: '',
        description:'',
        delivery:'',
        img:'',
        name:'',
        picture:'',
        price:0,
        sizes:[],
        defaultQty:0,
        url:'',
        url2:'',
        url3:'',
        url4:'',
        sex:''
        
    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.id]: e.target.value
        })
       
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('state from CREATEPRODUCT',this.state);
        this.props.createProductAction(this.state)
        this.props.history.push('/');   
    }
    


     onChangeInput=(value,e)=> {
        this.state.Category=value
        this.state.selectOptions=this.state.Category.value           
    }

    onChangeSizeInput=(value,e)=> {

      this.state.sizes=value
      this.state.selectOptions=this.state.sizes.value           
  }
  onChangeSexInput=(value,e)=> {

    this.state.sex=value
    this.state.selectSexOptions=this.state.sex.value         
}
    //-------------------------------------------------------------------------
    
 ReactFirebaseFileUpload = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
  
    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    const handleUpload = () => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrl(url);
              this.setState({url})
            });
        }
      );
    };
  
    console.log("URL ", this.state.url);
  
    return (
      <div>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input type="file" onChange={handleChange}  />
        <a onClick={handleUpload}>Загрузить</a>
        
        <br />
        {url}
        <br />
        <img  width={300} height={300}  src={url || "http://via.placeholder.com/300"} alt="firebase-image" />
      </div>
    );
  };
  
  ReactFirebaseFileUpload2 = () => {
    const [image, setImage] = useState(null);
    const [url2, setUrl2] = useState("");
    const [progress, setProgress] = useState(0);
  
    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    const handleUpload = () => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url2 => {
              setUrl2(url2);
              this.setState({url2})
            });
        }
      );
    };
  
    console.log("URL 2 =  ", this.state.url2);
  
    return (
      <div>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input type="file" onChange={handleChange}  />
        <a onClick={handleUpload}>Загрузить</a>
        
        <br />
        {url2}
        <br />
        <img  width={300} height={300}  src={url2 || "http://via.placeholder.com/300"} alt="firebase-image" />
      </div>
    );
  };
  

  ReactFirebaseFileUpload3 = () => {
    const [image, setImage] = useState(null);
    const [url3, setUrl3] = useState("");
    const [progress, setProgress] = useState(0);
  
    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    const handleUpload = () => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url3 => {
              setUrl3(url3);
              this.setState({url3})
            });
        }
      );
    };
  
    console.log("URL3 = ", this.state.url3);
  
    return (
      <div>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input type="file" onChange={handleChange}  />
        <a onClick={handleUpload}>Загрузить</a>
        
        <br />
        {url3}
        <br />
        <img width={300} height={300} src={url3 || "http://via.placeholder.com/300"} alt="firebase-image" />
      </div>
    );
  };
  
  ReactFirebaseFileUpload4 = () => {
    const [image, setImage] = useState(null);
    const [url4, setUrl4] = useState("");
    const [progress, setProgress] = useState(0);
  
    const handleChange = e => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    const handleUpload = () => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url4 => {
              setUrl4(url4);
              this.setState({url4})
            });
        }
      );
    };
  
    console.log("URL 4 =   ", this.state.url4);
  
    return (
      <div>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input type="file" onChange={handleChange}  />
        <a onClick={handleUpload}>Загрузить</a>
        
        <br />
        {url4}
        <br />
        <img width={300} height={300}  src={url4 || "http://via.placeholder.com/300"} alt="firebase-image" />
      </div>
    );
  };
  






   
    //------------------------------------------------------------------------
    
    render() {
        const { auth } = this.props;

        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                
                <form className="white" onSubmit={this.handleSubmit}>
                  
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div >
                        <label htmlFor="Category">Category</label>
                        {/* <Select options={colourOptions} type="text" id="Category" onChange={this.handleChange} /> */}
                        <CustomSelect options={options}  onChange={this.onChangeInput} /> 
                    </div>
                    <br/>
                    <br/>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    
                    <br/>
                    <br/>
                    
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>

                    <div>
                      <Container>
                        <Row>
                          <Col><this.ReactFirebaseFileUpload/></Col>
                          <Col><this.ReactFirebaseFileUpload2/></Col>
                          <Col><this.ReactFirebaseFileUpload3/></Col>
                          <Col><this.ReactFirebaseFileUpload4/></Col>
                        </Row>
                      </Container>
                       
                    </div>

                  

                    {/* <div className="input-field">
                        <label htmlFor="picture">IMAGE LINK</label>
                        <input type="text" id="picture" onChange={this.handleChange} />
                    </div>
                     */}
                    <br/>
                    <br/>
                    

                    <div className="input-field">
                        <label htmlFor="name">name</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    
                    <br/>
                    <br/>

                    <div className="input-field">
                        <label htmlFor="price">price</label>
                        <input type="number" id="price" onChange={this.handleChange} />
                    </div>
                    
                    {/* <FormGroup>
                          <Label for="exampleSelectMulti">
                            Select Multiple
                          </Label>
                          <Input
                            id="exampleSelectMulti"
                            multiple
                            name="selectMulti"
                            type="select"
                          >
                            <option>
                              1
                            </option>
                            <option>
                              2
                            </option>
                            <option>
                              3
                            </option>
                            <option>
                              4
                            </option>
                            <option>
                              5
                            </option>
                          </Input>
                        </FormGroup> */}
                    <br />
                    <br/>
                    <div className="input-field">
                      <label htmlFor="defaultQty">Add Sex</label>
                      <div >
                        <label htmlFor="Category">Select sex</label>
                        {/* <Select options={colourOptions} type="text" id="Category" onChange={this.handleChange} /> */}
                        <CustomSelect options={sex}   onChange={this.onChangeSexInput} /> 
                    </div>
                  </div>
                  <br />
                  <br/>
                  <div className="input-field">
                      <label htmlFor="defaultQty">Add Size</label>
                      <div >
                        <label htmlFor="Category">Select Size</label>
                        {/* <Select options={colourOptions} type="text" id="Category" onChange={this.handleChange} /> */}
                        <CustomSelect options={sizes}   onChange={this.onChangeSizeInput} /> 
                    </div>
                  </div>

                    <div className="input-field">
                        <label htmlFor="defaultQty">default qty</label>
                        <input type="number" id="defaultQty" onChange={this.handleChange} />
                    </div>


                    <br/>
                    <br/>
                    
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" >Create Project</button>
                    </div>



                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createProductAction: (product) => dispatch(createProductAction(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);