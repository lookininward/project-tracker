import './CreateTicket.scss';
import React, { useCallback, useEffect, useRef } from 'react';
import SelectSearch from 'react-select-search';
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import { STAGES, UNSCHEDULED } from '../../constants/stages';
import { CATEGORIES, UNKNOWN } from '../../constants/categories';
import Joi from 'joi';
import { useSelector } from "react-redux";

const schema = Joi.object().keys({
  title: Joi.string().required().min(3).max(120),
  description: Joi.string().max(500).allow(''),
});

interface Errors {
  [index: string]: any,
  title?: string,
  description?: string
}

export function CreateTicket(props: any) {
  const ref = useRef(null);
  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      props.onClose();
    }
  }, [props]);

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any)?.contains(e.target)) {
        props.onClose();
      }
    },
    [props],
  );

  useEffect(() => {
    // Attach the listeners on component mount.
    document.addEventListener('click', clickListener)
    document.addEventListener('keyup', escapeListener)
    // Detach the listeners on component unmount.
    return () => {
      document.removeEventListener('click', clickListener)
      document.removeEventListener('keyup', escapeListener)
    }
  }, [clickListener, escapeListener]);

  useFirestoreConnect({
    collection: "/users",
    storeAs: "users"
  });

  const users = useSelector((state: any) => state.firestore.data.users);
  const [titleInput, setTitle] = React.useState('');
  const [descriptionInput, setDescription] = React.useState('');
  const [selectedCategory, setCategory] = React.useState<any>(null);
  const [selectedStage, setStage] = React.useState<any>(null);
  const [selectedUser, setUser] = React.useState<any>(null);
  const [errors, setErrors] = React.useState<Errors>();

  const firestore = useFirestore();

  function handleSubmit(e: any) {
    const valid = schema.validate({
      title: titleInput,
      description: descriptionInput
    });

    if (valid.error) {
      const updatedErrors: Errors = {};
      valid.error.details.forEach((err: any) => updatedErrors[err.context.key] = err.message);
      setErrors(updatedErrors);
      e.preventDefault();
      return;
    }

    createTicket(
      titleInput,
      descriptionInput,
      selectedStage ? selectedStage.value : UNSCHEDULED,
      selectedCategory ? selectedCategory.value : UNKNOWN,
      selectedUser ? selectedUser : null,
    );
    e.preventDefault();
    props.onClose();
  }

  function createTicket(titleInput: any, descriptionInput: any, selectedStage: any, selectedCategory: any, selectedUser: any) {
    firestore
      .collection("/tickets")
      .add({
        title: titleInput,
        description: descriptionInput,
        category: selectedCategory,
        stage: selectedStage,
        owner: selectedUser
      })
  }

  return (
    <div ref={ref} className="my-modal create-ticket">
      <form onSubmit={(e: any) => handleSubmit(e)} autoComplete="off">
        <div className="modal-body">
          <div className="create-ticket__body">
            <input
              type="text"
              className={`form-control form-control-lg form-control--title mb-1 ${errors?.title ? 'is-invalid' : ''}`}
              id="titleInput"
              placeholder="Title"
              value={titleInput}
              onClick={() => setErrors({})}
              onChange={(e: any) => setTitle(e.target.value)}
            />
            <textarea
              className="create-ticket__body__input-description form-control form-control-sm p-3"
              placeholder="Add Description"
              value={descriptionInput}
              onClick={() => setErrors({})}
              onChange={(e: any) => setDescription(e.target.value)}
            />
          </div>

          <div className="create-ticket__options">
            <SelectSearch
              className="select-search select-search--categories me-2"
              search
              options={CATEGORIES.map(i => ({ name: i.LABEL, value: i.VALUE }))}
              value={selectedCategory?.value}
              placeholder="Category"
              filterOptions={(options: any) =>
                value => !value.length ?
                  options :
                  options.filter((i: any) => (i.name.toLowerCase()).includes(value.toLowerCase()))
              }
              onChange={(_, item: any) => setCategory(item)}
            />

            <SelectSearch
              className="select-search select-search--stages me-2"
              search
              options={STAGES.map(i => ({ name: i.LABEL, value: i.VALUE }))}
              value={selectedStage?.value}
              placeholder="Stage"
              filterOptions={(options: any) =>
                value => !value.length ?
                  options :
                  options.filter((i: any) => (i.name.toLowerCase()).includes(value.toLowerCase()))
              }
              onChange={(_, item: any) => setStage(item)}
            />

            <SelectSearch
              className="select-search select-search--users"
              search
              options={
                (() => {
                  if (users) {
                    const ids = Object.keys(users);
                    const formatted = ids.map(id => ({
                      id,
                      ...users[id]
                    }))
                    formatted.unshift({
                      id: null,
                      displayName: 'None',
                    });
                    return formatted.map((i: any) => ({
                      name: i.displayName,
                      value: i.id,
                    }))
                  }
                  return [];
                })()
              }
              value={selectedUser?.displayName}
              placeholder={selectedUser?.displayName || 'User'}
              filterOptions={(options: any) =>
                value => !value.length ?
                  options :
                  options.filter((i: any) => (i.name.toLowerCase()).includes(value.toLowerCase()))
              }
              renderValue={(valueProps: any) =>
                selectedUser ?
                  <div className="select-search-user">
                    <img src={selectedUser.avatarUrl} alt="avatar" />
                    <input className="select-search__input" {...valueProps} />
                  </div>
                  :
                  <input placeholder="user" className="select-search__input" {...valueProps} />
              }
              renderOption={(props: any, item: any) =>
                !item.value ?
                  <div className="select-search__clear" {...props}>None</div> :
                  <button {...props} type="button" className="select-search__input">
                    <img src={users[item.value].avatarUrl} alt="avatar" />
                    {users[item.value].displayName}
                  </button>
              }
              onChange={(id: any) => setUser(!id ? null : { id, ...users[id] })}
            />
          </div>
        </div>
        <div className="create-ticket__footer">
          <button type="button" className="my-btn my-btn--secondary me-2" onClick={() => props.onClose()}>Close</button>
          <button type="submit" className="my-btn my-btn--purple">Create Ticket</button>
        </div>
      </form>
    </div>
  );
}

export default CreateTicket;