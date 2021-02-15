import React from 'react';
import { useFirestore } from "react-redux-firebase";
import { STAGES } from '../../constants/stages';
import { CATEGORIES } from '../../constants/categories';

const DEFAULT_COLOR = '#000000';

export function CreateTicket() {
  const [titleInput, setTitle] = React.useState();
  const [selectedCategory, setCategory] = React.useState<any>(null);
  const [selectedStage, setStage] = React.useState<any>(null);
  const [selectedColor, setColor] = React.useState();

  const firestore = useFirestore();

  function handleSubmit(e: any) {
    createTicket(
      titleInput,
      selectedStage,
      selectedCategory,
      selectedColor
    );
    e.preventDefault();
  }

  function createTicket(titleInput: any, selectedStage: any, selectedCategory: any, selectedColor: any) {
    firestore
      .collection("/tickets")
      .add({
        title: titleInput,
        color: selectedColor,
        category: selectedCategory,
        stage: selectedStage,
      })
  }

  return (
    <form onSubmit={(e: any) => handleSubmit(e)}>
      <div className="modal-body">

        <div className="mb-3">
          <label htmlFor="titleInput" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="titleInput"
            value={titleInput || ''}
            onChange={(e: any) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="colorInput" className="form-label">Color</label>
          <input
            type="color"
            className="form-control"
            id="colorInput"
            value={selectedColor || DEFAULT_COLOR}
            onChange={(e: any) => setColor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="categoryInput" className="form-label">Category</label>
          <select
            id="categoryInput"
            className="form-select"
            aria-label="Default select example"
            value={selectedCategory?.VALUE || CATEGORIES[0]}
            onChange={(e: any) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((category: any) => <option key={category.ID} value={category.VALUE}>{category.LABEL}</option>)}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="stageInput" className="form-label">Stage</label>
          <select
            id="stageInput"
            className="form-select"
            aria-label="Default select example"
            value={selectedStage?.VALUE || STAGES[0]}
            onChange={(e: any) => setStage(e.target.value)}
          >
            {STAGES.map((stage: any) => <option key={stage.ID} value={stage.VALUE}>{stage.LABEL}</option>)}
          </select>
        </div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>
    </form>
  );
}

export default CreateTicket;