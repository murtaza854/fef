import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import "./Newsletter.scss";
import { Button, makeStyles } from '@material-ui/core';
import api from '../../api'
import { useState} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const useStyles = makeStyles((theme) => ({
  spacing: {
    marginTop: 15
  }
}));
// function example_image_upload_handler (blobInfo, success, failure, progress) {
//     const formData = new FormData();
//     formData.append(
//         "file",
//         blobInfo.blob()
//     );
//     var xhr  = new XMLHttpRequest();
//     xhr.onload = function() {
//         var json;

//         if (xhr.status === 403) {
//           failure('HTTP Error: ' + xhr.status, { remove: true });
//           return;
//         }

//         if (xhr.status < 200 || xhr.status >= 300) {
//           failure('HTTP Error: ' + xhr.status);
//           return;
//         }

//         json = JSON.parse(xhr.responseText);

//         if (!json || typeof json.location != 'string') {
//           failure('Invalid JSON: ' + xhr.responseText);
//           return;
//         }

//         success(json.location);
//       };
//     xhr.open("POST", `${api}/newsletter/addimages`, true);
//     xhr.send(formData);
//     // xhr.onerror = function () {
//     //   failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
//     // };

//     // formData = new FormData();
//     // formData.append('file', blobInfo.blob(), blobInfo.filename());

//     // xhr.send(formData);

//     // const formData = new FormData();
//     // formData.append(
//     //     "file",
//     //     state.picturePreview
//     // );
//     // var xhr  = new XMLHttpRequest();
//     // xhr.onload = function (e) {
//     //     //your success code goes here
//     // }
//     // xhr.open("POST", `http://localhost:4000/api/images/add?category=${state.category}`, true);
//     // xhr.send(formData);
//   };



function Newsletter(props) {
  const editorRef = useRef(null);
  
  const [ArticleName, setArticleName] = useState(null);
  const classes = useStyles();
  const log = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    await fetch(`${api}/newsletter/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title : ArticleName ,html: editorRef.current.getContent() }),
    });

    // const content = await response.json();
    // console.log(content.data.html);
    //     const formData = new FormData();
    // formData.append(
    //     "htmlcode",
    //     editorRef.current.getContent()
    // );
    // console.log(editorRef.current.getContent());
    // var xhr  = new XMLHttpRequest();
    // xhr.open("POST", `${api}/newsletter/AddNewsLetter`, true);
    // xhr.send(formData);

  };
  const ChangeArticleName = (event) =>{
    const { value } = event.target;
    setArticleName(value);
    console.log(value);  
  };
  return (
      <>
      <Form>
        <Row>
          <Col md={3}>
            <Form.Group controlId="formGroupFirstName">
              <Form.Label><p className="content-bold">Article Name*</p></Form.Label>
              <Form.Control type="text" placeholder="Enter email" required value={ArticleName} onChange={ChangeArticleName} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
        <Editor
          // tinymceScriptSrc={'/tinymce/jquery.tinymce.min'}
          // tinymceScriptSrc={file}
          apiKey="9sg9tver95ww72xxl6whpogouryih1wb9pfyotfpo1tywv3b"
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            image_list: `${api}/newsletter/getImages`,
            // images_upload_url: `${api}/newsletter/addimages`,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist image outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
        </Row>
        <Button className={classes.spacing} onClick={log} type="submit" variant="contained" color="primary">
          Save
        </Button>
        </Form>
      </>
      );
}

      export default Newsletter;