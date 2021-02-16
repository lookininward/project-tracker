import React from 'react';
import { useFirestore } from "react-redux-firebase";
import { STAGES } from '../../constants/stages';
import { CATEGORIES } from '../../constants/categories';
import { Editor } from '@tinymce/tinymce-react';
import DOMPurify from 'dompurify';

const DEFAULT_COLOR = '#000000';

export function CreateTicket() {
  const [titleInput, setTitle] = React.useState();
  const [selectedCategory, setCategory] = React.useState<any>(null);
  const [selectedStage, setStage] = React.useState<any>(null);
  const [selectedColor, setColor] = React.useState();
  const [htmlBody, setPreviewState] = React.useState<any>('');

  const firestore = useFirestore();

  function handleSubmit(e: any) {
    createTicket(
      titleInput,
      selectedStage,
      selectedCategory,
      selectedColor,
      htmlBody,
    );
    e.preventDefault();
  }

  function createTicket(titleInput: any, selectedStage: any, selectedCategory: any, selectedColor: any, htmlBody: any) {
    firestore
      .collection("/tickets")
      .add({
        title: titleInput,
        color: selectedColor,
        category: selectedCategory,
        stage: selectedStage,
        body: htmlBody
      })
  }

  return (
    <div className="modal modal-md fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered text-start">
        <div className="modal-content">
          <form onSubmit={(e: any) => handleSubmit(e)}>
            <div className="modal-body d-flex">
              <div className="me-4 w-75">
                <input
                  type="text"
                  className="form-control form-control-lg mb-3"
                  id="titleInput"
                  placeholder="Title"
                  value={titleInput || ''}
                  onChange={(e: any) => setTitle(e.target.value)}
                />
                <Editor
                  apiKey={process.env.REACT_APP_TINY_MCE_API_KEY}
                  initialValue=""
                  init={{
                    height: 400,
                    menubar: false,
                    plugins: [
                      'code codesample',
                      'autolink link image',
                      'media paste wordcount'
                    ],
                    toolbar: 'image | undo redo | bold italic backcolor | bullist numlist | codesample | removeformat',
                    default_link_target: '_blank',
                    link_assume_external_targets: true,
                    resize: false
                  }}
                  onEditorChange={(editorState: any) => {
                    setPreviewState({ __html: DOMPurify.sanitize(editorState) });
                  }}
                />
              </div>

              <div className="w-25">
                <div className="form-floating mb-3">
                  <select
                    id="stageInput"
                    className="form-select form-select-sm"
                    aria-label="Default select example"
                    value={selectedStage?.VALUE || STAGES[0]}
                    onChange={(e: any) => setStage(e.target.value)}
                  >
                    {STAGES.map((stage: any) => <option key={stage.ID} value={stage.VALUE}>{stage.LABEL}</option>)}
                  </select>
                  <label htmlFor="stageInput" className="">Project</label>
                </div>

                <div className="form-floating mb-3">
                  <select
                    id="stageInput"
                    className="form-select form-select-sm"
                    aria-label="Default select example"
                    value={selectedStage?.VALUE || STAGES[0]}
                    onChange={(e: any) => setStage(e.target.value)}
                  >
                    {STAGES.map((stage: any) => <option key={stage.ID} value={stage.VALUE}>{stage.LABEL}</option>)}
                  </select>
                  <label htmlFor="stageInput">Stage</label>
                </div>

                <div className="form-floating mb-3">
                  <select
                    id="categoryInput"
                    className="form-select form-select-sm"
                    aria-label="Default select example"
                    value={selectedCategory?.VALUE || CATEGORIES[0]}
                    onChange={(e: any) => setCategory(e.target.value)}
                  >
                    {CATEGORIES.map((category: any) => <option key={category.ID} value={category.VALUE}>{category.LABEL}</option>)}
                  </select>
                  <label htmlFor="categoryInput">Category</label>
                </div>

                <div className="form-floating mb-3">
                  <select
                    id="categoryInput"
                    className="form-select form-select-sm"
                    aria-label="Default select example"
                    value={selectedCategory?.VALUE || CATEGORIES[0]}
                    onChange={(e: any) => setCategory(e.target.value)}
                  >
                    {CATEGORIES.map((category: any) => <option key={category.ID} value={category.VALUE}>{category.LABEL}</option>)}
                  </select>
                  <label htmlFor="categoryInput">Creator</label>
                </div>

                <div className="form-floating mb-3">
                  <select
                    id="categoryInput"
                    className="form-select form-select-sm"
                    aria-label="Default select example"
                    value={selectedCategory?.VALUE || CATEGORIES[0]}
                    onChange={(e: any) => setCategory(e.target.value)}
                  >
                    {CATEGORIES.map((category: any) => <option key={category.ID} value={category.VALUE}>{category.LABEL}</option>)}
                  </select>
                  <label htmlFor="categoryInput">Owner</label>
                </div>

                <div className="mb-3">
                  <input
                    type="color"
                    className="form-control"
                    id="colorInput"
                    value={selectedColor || DEFAULT_COLOR}
                    onChange={(e: any) => setColor(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-sm btn-success">Create Ticket</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;