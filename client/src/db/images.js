import { FormControl, Button, makeStyles, Select, Input, MenuItem, InputLabel, FormHelperText } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { Col, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../api';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    image: {
      width: '400px',
      marginBottom: 30
    },
    btn: {
    //   width: '100%',
    },
  }));

  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const createImageTableData = (data) => {
    const { id, name, imageCategory } = data;
    console.log(imageCategory);
    const imageCategoryName = imageCategory.name;
    const imagePath = `/images/${name}`;
    return { id, name, imageCategoryName, imagePath };
}

const imagetDataObj = {
    apiTable: `${api}/images/TableData`,
    deleteApi: [`${api}/images/getByIds`, `${api}/images/delete`],
    createTableData : createImageTableData,
    headCells: [
        { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
        { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
        { id: 'imageCategoryName', numeric: false, disablePadding: false, label: 'Image Category' },
        { id: 'imagePath', numeric: false, disablePadding: false, label: 'Image' },
    ],
    ManyChild: '',
    checkboxSelection: 'id',
    editAllowed: false,
    modelName: 'Image',
    ordering: 'id',
    rightAllign: [],
    Form: function() {
        const classes = useStyles();
        let history = useHistory();

        const [state, setState] = useState({picturePreview: '', imgURl: '', category: ''});
        const [imageCategories, setImageCategories] = useState([]);

        const [isDisabled, setCanSubmit] = useState(true);
        const [pressedBtn, setPressedBtn] = useState(null);

        useEffect(() => {
            let flag = false;
            if (state.picturePreview === '') flag = true;
            if (state.category === "" || state.category === undefined) flag = true;
            setCanSubmit(flag);
        }, [state]);

        useEffect(() => {(
            async () => {
                const response = await fetch(`${api}/image-category/TableData`, {
                    headers: {'Content-Type': 'application/json'},
                });
                const content = await response.json();
                setImageCategories(content.data);
            })();
        }, []);

        function changeState(event) {
            const { name, value } = event.target;
            setState(prevState => ({ ...prevState, [name]: value }));
        };
        
        async function onSubmit(event) {
            event.preventDefault();
            const formData = new FormData();
            formData.append(
                "file",
                state.picturePreview
            );
            var xhr  = new XMLHttpRequest();
            xhr.onload = function (e) {
                //your success code goes here
            }
            xhr.open("POST", `http://localhost:4000/api/images/add?category=${state.category}`, true);
            xhr.send(formData);
            // const response = await fetch(`http://localhost:4000/api/images/add`, {
            //     method: 'POST',
            //     body: formData,
            // });
            // const content = await response.json();
            // console.log(content);
            history.push('/admin/images');
        };
        const onImageChange = event => {
            let reader = new FileReader();
            if (event.target.files && event.target.files[0]) {
                reader.readAsDataURL(event.target.files[0]);
                console.log();
                reader.onload = () => {   
                    setState({
                        picturePreview: event.target.files[0],
                        imgURl: URL.createObjectURL(event.target.files[0])
                    })
                }
            }
          };

        return (<form onSubmit={onSubmit}>
            <fieldset>
                <legend>Image</legend>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="imagePath">
                        <FormControl required>
                            {state.imgURl !== '' ? (
                                <img className={classes.image} src={state.imgURl} alt="Preview" />
                            ) : null
                            }
                            <input
                                className={classes.btn}
                                color="secondary" 
                                autoComplete="none"
                                // value={state.imagePath}
                                type="file"
                                accept='image/*'
                                // inputProps={{ accept: 'image/*' }}
                                id="imagePath"
                                name="imagePath"
                                onChange={onImageChange}
                                aria-describedby="imagePath-helper"
                            />
                        </FormControl>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md={6} controlId="category">
                        <FormControl className={classes.formControl}>
                            <InputLabel id="category">Image Category</InputLabel>
                            <Select
                            labelId="category"
                            id="category"
                            name="category"
                            value={state.category}
                            onChange={changeState}
                            input={<Input />}
                            MenuProps={MenuProps}
                            >
                            <MenuItem key={0} value="">
                            -
                            </MenuItem>
                            {imageCategories.map((obj) => (
                                <MenuItem key={obj.id} value={obj.id}>
                                {obj.name}
                                </MenuItem>
                            ))}
                            </Select>
                            <FormHelperText error={state.error} id="name-helper">Please select an Image Category</FormHelperText>
                        </FormControl>
                    </Form.Group>
                </Form.Row>
            </fieldset>
            <input 
                type="text" 
                autoComplete="on" 
                value="" 
                style={{display: 'none'}} 
                readOnly={true}
                />
            <Button onClick={_ => setPressedBtn(1)} disabled={isDisabled} type="submit" variant="contained" color="primary">
                Save
            </Button>
            <Button onClick={_ => setPressedBtn(2)} disabled={isDisabled} type="submit" variant="contained" color="primary">
                Save and add another
            </Button>
        </form>);
    },
}

export default imagetDataObj;